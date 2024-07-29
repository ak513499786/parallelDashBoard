"use client";

import fs from 'fs';
import path from 'path';
import { connect } from '../../../lib/db';
import Kyc from '../../../models/Onboarding/Kyc';
import jwt from 'jsonwebtoken';

async function findAllKyc() {
  console.log("Find all KYC records");
  return Kyc.find({});
}

async function createKyc(kycData) {
  const newKyc = new Kyc(kycData);
  await newKyc.save();
  return newKyc;
}

export default async function handler(req, res) {
  await connect();

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decoded.id;

    switch (req.method) {
      case 'GET':
        console.log("GET request for KYC records");
        const kycRecords = await findAllKyc();
        res.status(200).json(kycRecords);
        break;

      case 'POST':
        const { panNumber, panPhoto, passportPhoto } = req.body;

        if (!panNumber) {
          return res.status(400).json({ error: 'PAN number is required' });
        }

        // Convert base64 strings to binary data
        const base64ToFile = (base64String, filePath) => {
          const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          fs.writeFileSync(filePath, buffer);
        };

        // Define file paths
        const panPhotoPath = path.join(process.cwd(), 'public', `${userId}_panPhoto.jpg`);
        const passportPhotoPath = path.join(process.cwd(), 'public', `${userId}_passportPhoto.jpg`);

        // Save images
        if (panPhoto) {
          base64ToFile(panPhoto, panPhotoPath);
        }
        if (passportPhoto) {
          base64ToFile(passportPhoto, passportPhotoPath);
        }

        // Save KYC details in the database
        const kycData = {
          panNumber,
          panPhoto: panPhoto ? panPhotoPath : null,
          passportPhoto: passportPhoto ? passportPhotoPath : null,
          userId
        };

        const createdKyc = await createKyc(kycData);
        res.status(201).json({ message: 'KYC details saved successfully', data: createdKyc });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      res.status(401).json({ error: 'Invalid token' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
}

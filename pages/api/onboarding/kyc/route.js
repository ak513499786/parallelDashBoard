"use client";
import fs from 'fs';
import path from 'path';
import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    await connect();

    if (req.method === 'POST') {
        const { panNumber, panPhoto, passportPhoto } = req.body;

        


        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization token is required' });
        }

        const token = authHeader.split(' ')[1];


        if (!panNumber) {
            return res.status(400).json({ error: 'PAN number is required' });
        }

        try {

            const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
            const userId = decoded.id;
            console.log("Extracted userId from token:", userId);
            console.log(panNumber, "this is my pan number");

            // Convert base64 strings to binary data
            const base64ToFile = (base64String, filePath) => {
                const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                fs.writeFileSync(filePath, buffer);
            };

            // Define file paths
            const panPhotoPath = path.join(process.cwd(), 'public', 'panPhoto.jpg');
            const passportPhotoPath = path.join(process.cwd(), 'public', 'passportPhoto.jpg');

            // Save images
            if (panPhoto) {
                base64ToFile(panPhoto, panPhotoPath);
            }
            if (passportPhoto) {
                base64ToFile(passportPhoto, passportPhotoPath);
            }

            // Save user details in the database
            const updatedUser = await User.findOneAndUpdate(
                { _id: userId }, // Find user with userId equal to 1
                {
                    panNumber,
                    panPhoto: panPhoto ? panPhotoPath : null,
                    passportPhoto: passportPhoto ? passportPhotoPath : null,
                },
                { new: true } // Return the updated document
            );

            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ message: 'PAN details saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error saving PAN details' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

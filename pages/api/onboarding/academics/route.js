"use client";

import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import jwt from "jsonwebtoken";

console.log("it is working");
export default async function handler(req, res) {
    await connect();
    console.log("DB connected");

    if (req.method === 'POST') {
        const { currentoccupation, highestQualification, branchOfDegree, collegeName } = req.body;

        


        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization token is required' });
        }

        const token = authHeader.split(' ')[1];


        if (!currentoccupation || !highestQualification ||!branchOfDegree || !collegeName) {
            return res.status(400).json({ error: 'All academics details are required' });
        }


        try {

            const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
            const userId = decoded.id;
            console.log("Extracted userId from token:", userId);
            console.log(currentoccupation, "this is the current occupation");

          

            // Save user details in the database
            const updatedUser = await User.findOneAndUpdate(
                { _id: userId }, 
                {
                    currentoccupation: currentoccupation,
                    highestQualification:highestQualification,
                    branchOfDegree:branchOfDegree,
                    collegeName: collegeName,
                },
                { new: true } 
            );

            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ message: 'academicsc details saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error saving personal details' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}
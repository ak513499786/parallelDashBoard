"use client"

import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import bcryptjs from 'bcrypt';


export default async function POST(req, res) {
  //const { method } = req;

  if (req.method !== 'POST') {
    return res.status(400).json({ success: false, error: 'Invalid request method' });
  }

  try {
    await connect();
    
    const { email, password } = req.body;
    console.log("Request body", req.body);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return res.status(201).json({
      message: 'User created successfully',
      success: true,
      data: savedUser
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

"use client"

import { log } from 'console';
import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import bcryptjs from 'bcrypt';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  export default async function handler(req, res) {
    try {
      await connect();
  
      if (req.method === 'POST') {
        const { email } = req.body;
  
        // Step 1: Send Reset Link
        if (email) {
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(400).json({ success: false, error: 'No account found with that email.' });
          }
  
          const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' });
  
          const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
          
          await transporter.sendMail({
            to: email,
            subject: 'Password Reset',
            text: `You requested a password reset. Click here to reset your password: ${resetLink}`,
          });
  
          return res.status(200).json({ success: true, message: 'Reset link sent to your email.' });
        }
  
        // Step 3: Update New Password
        const { token, newPassword, confirmPassword } = req.body;
  
        if (newPassword !== confirmPassword) {
          return res.status(400).json({ success: false, error: 'Passwords do not match.' });
        }
  
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const hashedPassword = await bcrypt.hash(newPassword, 10);
  
        await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });
  
        return res.status(200).json({ success: true, message: 'Password updated successfully.' });
  
      } else {
        return res.status(405).json({ success: false, error: 'Method not allowed.' });
      }
    } catch (error) {
      console.error('Error in forgot password:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
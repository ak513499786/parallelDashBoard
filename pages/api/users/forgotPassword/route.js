"use client"

import Forgot from '../../../models/Forgot';
import User from '../../../models/userModel';
import { connect } from '../../../lib/db';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';


await connect();

export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  console.log("before rebody");
  const { email } = req.body;

  // Check if user exists in the DB
  console.log("before email find"); //--> for debugging only
  const user = await User.findOne({ email });
  console.log('after email find');

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const token =  jwt.sign({ email: email }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
  console.log("token");
  // Save the token in the Forgot model
  const forgot = new Forgot({
    email: email,
    token: token,
  });

  await forgot.save();

  

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "911861fe8e32ac",
      pass: "97f1bffc8f2a64"
    }
  });

  const mailOptions = {
    from: 'pranav@codelinear.com',
    to: email,
    subject: 'Password Reset Link',
    text: `Use this link to reset your password. The link is only valid for 24 hours.

************
Hi,
************

You recently requested to reset your password for your account. Use the link below to reset it. This password reset is only valid for the next 24 hours.

Reset your password: http://localhost:3000/forgot-password?token=${token}

For security, this request was received from a device. If you did not request a password reset, please ignore this email or contact support if you have questions.

Thanks,
The Team

If you’re having trouble with the link above, copy and paste the URL below into your web browser.

http://localhost:3000/forgot-password?token=${token}

Company Name, LLC
1234 Street Rd.
Suite 1234`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
    console.log("mail sent");
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
}

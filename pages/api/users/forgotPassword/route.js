"use client";

import Forgot from '../../../models/Forgot';
import User from '../../../models/userModel';
import { connect } from '../../../lib/db';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await connect();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Check if user exists in the DB
    const user = await User.findOne({ email });
    console.log('after email find');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(user);

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    // Creating token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
    console.log("generated token", token);

    // Create a new instance of the Forgot model
    const forgot = new Forgot({
      email: email,
      token: token,
    });

    // Save the token in the Forgot model
    await forgot.save();    
    console.log("after forgot save");



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
      from: 'pranav.srivastava.1291@gmail.com',
      to: email,
      subject: 'Password Reset Link',
      text: `Use this link to reset your password. The link is only valid for 24 hours.

************
Hi,
************

You recently requested to reset your password for your account. Use the link below to reset it. This password reset is only valid for the next 24 hours.

Reset your password: http://localhost:3000/reset-password?token=${token}

For security, this request was received from a device. If you did not request a password reset, please ignore this email or contact support if you have questions.

Thanks,
The Team

If you’re having trouble with the link above, copy and paste the URL below into your web browser.

http://localhost:3000/reset-password?token=${token}

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
  


    
  } catch (error) {
    res.status(500).json({ message: 'Forgot password failed' });




}}


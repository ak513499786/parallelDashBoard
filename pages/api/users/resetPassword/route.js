"use client"

import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import bcryptjs from 'bcrypt';

export default async function handler(req, res) {
  try {
    await connect();

    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, error: 'Invalid request method' });
    }

    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ success: false, error: 'Token and new password are required' });
    }

    // Find the user by token and ensure the token is not expired
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, error: 'Invalid or expired token' });
    }

    // Hash the new password
    const salt = await bcryptjs.genSalt(10);
    const hashedNewPassword = await bcryptjs.hash(newPassword, salt);

    // Update the password and clear the reset token and expiry
    user.password = hashedNewPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;
    await user.save();

    return res.status(200).json({ success: true, message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

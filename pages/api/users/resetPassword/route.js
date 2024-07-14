import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  try {
    await connect();

    if (req.method === 'POST') {
      const { token, newPassword, confirmPassword } = req.body;

      // Check if passwords match
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ success: false, error: 'Passwords do not match.' });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update user password
      await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });

      return res.status(200).json({ success: true, message: 'Password updated successfully.' });

    } else {
      return res.status(405).json({ success: false, error: 'Method not allowed.' });
    }
  } catch (error) {
    console.error('Error in reset password:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

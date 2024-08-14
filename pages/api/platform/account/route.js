import { connect } from '../../../lib/db';
import Account from '../../../models/platform/Account';

export default async function handler(req, res) {
  await connect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const account = await Account.findOne({ userId: req.query.userId });
        if (!account) {
          return res.status(404).json({ success: false, message: 'Account not found' });
        }
        res.status(200).json({ success: true, data: account });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { userId, resume, locationPreference, courseOpted, paymentInfo } = req.body;

        let resumeBase64 = null;
        if (resume && resume.startsWith('data:application/pdf;base64,')) {
          resumeBase64 = resume.split(',')[1];
        }

        const account = await Account.findOneAndUpdate(
          { userId },
          { resume: resumeBase64, locationPreference, courseOpted, paymentInfo },
          { new: true, upsert: true }
        );

        res.status(200).json({ success: true, data: account });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const { userId, password } = req.body;

        // Ensure you include the filter for the document to be updated
        const account = await Account.findOneAndUpdate(
          { userId },
          { password },
          { new: true }
        );

        if (!account) {
          return res.status(404).json({ success: false, message: 'Account not found' });
        }

        res.status(200).json({ success: true, data: account });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { userId } = req.body;
        const result = await Account.findOneAndDelete({ userId });

        if (!result) {
          return res.status(404).json({ success: false, message: 'Account not found' });
        }

        res.status(200).json({ success: true, message: 'Account deleted' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

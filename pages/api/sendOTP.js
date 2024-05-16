const axios = require('axios');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { mobileNumber } = req.body;
      const otp = Math.floor(100000 + Math.random() * 900000);
      const response = await axios.get('https://www.fast2sms.com/dev/bulk', {
        params: {
          authorization: 'E63XDpXPodQYplvdYfJJqb1qr4sgEhjxm5TilWJvc9Dpyb8b5mcwUpv2mXeC',
          variables_values: `Your OTP is ${otp}`,
          route: 'otp',
          numbers: mobileNumber
        }
      });
      res.json({ success: true, message: 'OTP sent successfully!' });
    } catch (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json({ success: false, message: 'Failed to send OTP.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
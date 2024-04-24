const twilio = require('twilio');

const client = twilio('AC4a08ebb35683b49cd9ed15e69c2e8dd0', 'b4910272e620309308cb1814c86e2783');

export default async function handler(req, res) {
  try {
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const message = await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: 'Parallel',
      to: phoneNumber
    });
    console.log('OTP sent successfully:', message.sid);
    return message.sid;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};


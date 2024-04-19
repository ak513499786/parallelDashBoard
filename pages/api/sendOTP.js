// Import the Twilio module
const twilio = require('twilio');

// Initialize Twilio client with your Account SID and Auth Token
const client = twilio('AC4a08ebb35683b49cd9ed15e69c2e8dd0', 'b4910272e620309308cb1814c86e2783');

// Function to send OTP via SMS
const sendOTP = async (phoneNumber, otp) => {
  try {
    // Send SMS message using Twilio
    const message = await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: '+917396822306',
      to: phoneNumber
    });
    console.log('OTP sent successfully:', message.sid);
    return message.sid;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

module.exports = { sendOTP };

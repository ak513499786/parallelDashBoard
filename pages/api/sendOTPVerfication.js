import { sendOTP } from "./sendOTP";

export default class SendOTPHandler {
  async post(req, res) {
    try {
      if (req.method === "POST") {
        const { phoneNumber } = req.body;
        const otpSent = await sendOTP(phoneNumber);
        if (otpSent) {
          res.status(200).json({ success: true, message: "OTP sent successfully" });
        } else {
          res.status(500).json({ success: false, message: "Failed to send OTP" });
        }
      } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  }
}

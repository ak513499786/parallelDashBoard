import db from '../../../lib/db.js';
import User from '../../../models/userModel.js';

export default async function handler(req, res) {
  const {method} = req;

  await db();

  switch (method) {
    case 'POST':
      try {
        const reqBody = await User.create(req.body);
        const {email, password} = reqBody;
        console.log (reqBody)
        res.status(201).json({ success: true, data: reqBody });

        //check if user already exists
        const user = await User.findOne({email})
        if (user) {
          return res.json({error: "User already exists"}, {status: 400})
        }

        //hashe password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User ({
          email,
          password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);


        return res.json({message: "User created successfully",
          success: true,
          savedUser
        })



      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false, error: "Invalid request method" });
      break;
  }
}

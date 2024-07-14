"use client"

import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import bcryptjs from 'bcrypt';
import jwt from "jsonwebtoken";




export default async function handler(req, res) {
    try {
        await connect();

        const { email, password } = req.body;
        console.log(req.body);

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User does not exist" });
        }

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid password" });
        }

        //Notee:create token data by the user's id and email ````````
        const tokenData = {
            id: user._id,
            email: user.email
        }
        
        //'keep me signed' in token
        // const tokenSignedIn = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: keepSignedIn ? '7d' : '1d' });

        // res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${keepSignedIn ? 7 * 24 * 60 * 60 : 24 * 60 * 60}`);

        //creting token
        const token = jwt.sign(tokenData, process.
            env.TOKEN_SECRET, { expiresIn: "1d" })
        console.log("generated token", token);


        const response = res.json({
            message: "Login successful",
            success: true,
            tokendata: token,
        })
        res.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;


    } catch (error) {
        return res.json({ error: error.message }, { status: 500 })

    }
}

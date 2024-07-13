"use client"

import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import bcryptjs from 'bcrypt';
import jwt from "jsonwebtoken";




export default async function handler(req, res){
    try {
        await connect();

        
        const reqBody = await req.body;
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            return res.json({error: "User does not exist"}, {status: 200})
        }

        const Mypassword = await User.findOne({password})
        if(!Mypassword){
            return res.json({error: "User does not exist"}, {status: 200})
        }
        
        //check if password is correct
        // const validPassword = await bcryptjs.compare(password, user.password)
        // if(!validPassword){
        //     return res.json({error: "Invalid password"}, {status:400})
        // }

        //create token data
        const tokenData = {
            id: user._id,
            email: user.email
        }

        //creting token
        const token = jwt.sign(tokenData, process.
        env.TOKEN_SECRET, {expiresIn: "1d"})
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
        return res.json({error: error.message}, {status: 500})
        
    }
}

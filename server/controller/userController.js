import userSchema from '../model/userModel.js'
import asyncHandler from 'express-async-handler'
import Jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Require custom path 
import {resolve} from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import env file
import dotenv from 'dotenv';
dotenv.config({ path: resolve(__dirname, '../config/.env') });
const secret_key = process.env.JWT_SECRET;

export const registerUser = asyncHandler(async(req, res) => {
    const {username, password} = req.body;
    const existingUser = await userSchema.findOne({username: username});
    if(existingUser) {
        return res.status(409).json({error: 'This username is already taken'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const saveUser = await userSchema.create({
        username,
        password:hashedPassword,
    });
    res.status(200).json({message: 'User registered successfully!'})
});

export const loginUser = asyncHandler(async(req, res) => {
    const {username, password} = req.body
    const existingUser = await userSchema.findOne({username: username});
    if(!existingUser) {
        return res.status(404).json({error: 'Username and password are incorrect!'})
    }
    const comparePassword = await bcrypt.compare(password, existingUser.password)
    if(comparePassword) {
        const token = await Jwt.sign({
            _id: existingUser._id
        }, secret_key)
        const {_id, username} = existingUser
        res.json({message: 'Successfully Login', token, user:{_id, username,}})
    } else {
        return res.status(401).json({error: 'Username and password are incorrect!'}) 
    }
});
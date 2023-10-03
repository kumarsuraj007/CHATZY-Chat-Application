import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path: './config/.env'})
import connectDB from './config/db.js';
connectDB();


const app = express();
const port = 9000 || process.env.PORT;

app.listen(port, () => console.log(`Server is listening to port ${port}!`))
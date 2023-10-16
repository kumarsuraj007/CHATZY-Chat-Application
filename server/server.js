import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 9000 || process.env.PORT;

// Imports
import connectDB from "./config/db.js";
import userRoute from './routes/userRoute.js';

// Database connection
dotenv.config({ path: "./config/.env" });
connectDB();

// Middlewares
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 
app.use('/api/auth', userRoute)

app.listen(port, () => console.log(`Server is listening to port ${port}!`));

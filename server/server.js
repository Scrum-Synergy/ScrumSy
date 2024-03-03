// Server Side -> Mohamed , Koussay 
import dotenv from "dotenv"; // access env file
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config(); // Access env file

const app = express();

// Origin Client Side
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;

// Connecting to MongoDB

mongoose.connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to MongoDB:', err.message);
    });



// Server Side -> Mohamed , Koussay 
import dotenv from "dotenv"; // access env file
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
// ...
import revisionRoute from "./routes/revision.routes.js";
import userRoute from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoute from "./routes/dashboard.routes.js";
import requestRoute from "./routes/request.routes.js";


dotenv.config(); // Access env file

const app = express();

// Origin Client Side
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// server routing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', authRoutes);
app.use('/api/revision', revisionRoute);
app.use('/api/users', userRoute); // Use the users route under /api/users 🍔 HappyCoding
app.use("/api/dashboard", dashboardRoute); // Use the dashboard route under /api/dashboard 👨‍🍳 HappyCoding
app.use("/api/request", requestRoute);

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



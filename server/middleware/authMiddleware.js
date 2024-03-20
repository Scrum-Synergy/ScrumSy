// authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Import your user model

const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt; // Get JWT token from cookies
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        console.error("JWT_SECRET environment variable is not set.");
        return res.status(500).send("Internal Server Error");
    }

    if (token) {
        try {
            const decodedToken = jwt.verify(token, JWT_SECRET);
            const user = await User.findById(decodedToken.userId); // Assuming userId is stored in the token

            if (!user) {
                console.error("User not found.");
                return res.status(401).json({ error: 'Unauthorized' });
            }

            // Optionally, you can attach the user object to the request for future use
            req.user = user;
            next();
        } catch (err) {
            console.error("JWT verification error:", err.message);
            return res.status(401).json({ error: 'Unauthorized' });
        }
    } else {
        console.error("No JWT token found in cookies.");
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

export default requireAuth;

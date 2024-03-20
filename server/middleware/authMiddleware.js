// authMiddleware.js
import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt; // Get JWT token from cookies
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        console.error("JWT_SECRET environment variable is not set.");
        return res.status(500).send("Internal Server Error");
    }

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.error("JWT verification error:", err.message);
                return res.status(401).json({ error: 'Unauthorized' });
            } else {
                console.log("Decoded token:", decodedToken);
                req.user = decodedToken; // Store the decoded token in request for future use
                next();
            }
        });
    } else {
        console.error("No JWT token found in cookies.");
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

export { requireAuth };

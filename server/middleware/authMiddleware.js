import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt; // Get JWT token from cookies 
    const JWT_SECRET = process.env.JWT_SECRET;

    // Check if JWT token exists and is verified
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/'); // Redirect to sign-in page if token is invalid
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/'); // Redirect to sign-in page if no token is found
    }
};

export default requireAuth;

// expect to see the decoded token in the console when the user is authenticated
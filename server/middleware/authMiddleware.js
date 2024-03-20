import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt; // Assuming you're using JWT and storing token in cookies
    const JWT_SECRET = process.env.JWT_SECRET;

    // Check if JWT token exists and is verified
    if (token) {
        jwt.verify(token, `${JWT_SECRET}`, (err, decodedToken) => {
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

import requireAuth from '../middleware/authMiddleware.js';


export const authStatus = (req, res) => {
    res.status(200).json({ isAuthenticated: true, user: req.user });
}

export const signOut = (req, res) => {
    // clear jwt from cookies
    res.clearCookie('jwt');
    res.status(200).json({ signOut: true });
}

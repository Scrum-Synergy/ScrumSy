// authRoutes.js
import express from 'express';
import requireAuth from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/status', requireAuth, (req, res) => {
    res.status(200).json({ isAuthenticated: true });
});

export default router;

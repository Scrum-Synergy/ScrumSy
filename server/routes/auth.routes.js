// authRoutes.js
import express from 'express';
import { getStatus, signOut } from '../controllers/auth.js';
import requireAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/status', requireAuth, getStatus);

router.get('/signout', signOut);

export default router;

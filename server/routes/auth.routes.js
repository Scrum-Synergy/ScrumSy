// authRoutes.js
import express from 'express';
import { requireAuth, signOut } from '../controllers/auth.js';

const router = express.Router();

router.get('/status', requireAuth);

router.get('/signout', signOut);

export default router;

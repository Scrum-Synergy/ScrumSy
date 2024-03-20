// authRoutes.js
import express from 'express';
import { authStatus, signOut } from '../controllers/auth.js';

const router = express.Router();

router.get('/status', authStatus);

router.get('/signout', signOut);

export default router;

import express from 'express';
import requireAuth from '../middleware/authMiddleware.js';
import { createRequest, getAllRequests, updateRequest, getPendingRequests, deleteRequest, getRequest } from '../controllers/request.js';

const router = express.Router();

router.use(requireAuth);

router.post('/create', requireAuth, createRequest);

router.get('/all', requireAuth, getAllRequests);

router.get('/pending', requireAuth, getPendingRequests);

router.put('/update/:id', requireAuth, updateRequest);

router.delete('/delete/:id', requireAuth, deleteRequest);

router.get('/:id', requireAuth, getRequest);

export default router;
import express from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/user.js';
import { body } from 'express-validator';

const router = express.Router();

// Validation middleware for user creation
const validateCreateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('userType').isIn(['student', 'professor', 'parent']).withMessage('Invalid user type'),
    body('username').notEmpty().withMessage('Username is required'),
    body('phoneNumber').notEmpty().withMessage('Phone number is required'),
];

// Routes
router.post('/', validateCreateUser, createUser);

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.put('/:id', validateCreateUser, updateUser);

router.delete('/:id', deleteUser);

export default router;

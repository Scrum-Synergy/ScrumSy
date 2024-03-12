import express from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/users_crud.js';
import { body } from 'express-validator';

const router = express.Router();

// Validation middleware for user creation request body fields 
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
// Path: server/routes/index.js
// ...
// Import and use the users routes
// ...
//  app.use('/api/users', usersRoutes);
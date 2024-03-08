import User from '../models/user.js';
import { validationResult } from 'express-validator';

// Create a new user
export const createUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            userType: req.body.userType,
            username: req.body.username,
            phoneNumber: req.body.phoneNumber,
        };

        const user = await User.create(newUser);

        return res.status(201).json({ message: 'User created successfully', data: user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get a specific user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Update a specific user by ID
export const updateUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const updatedUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            userType: req.body.userType,
            username: req.body.username,
            phoneNumber: req.body.phoneNumber,
        };

        const user = await User.findByIdAndUpdate(req.params.id, updatedUser, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User updated successfully', data: user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete a specific user by ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.deleteOne();

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

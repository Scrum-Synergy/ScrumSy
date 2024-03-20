import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// Sign up a new user (  if CRUD is enabled, this should be a POST request )
// The password is hashed before saving it to the database
// 😊 Koussay Please Check This Signup ( use it inside CRUD )
export const signUp = async (req, res) => {
   try {
      const { username, password } = req.body;

      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
         return res.status(400).json({ message: 'Username already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'User created successfully' });
   } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
   }
};

// Sign in a user
export const signIn = async (req, res) => {
   try {
      const { email, password } = req.body;

      // Check if the email exists
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(401).json({ message: 'Invalid email or password' }); // 🐱‍👤 inv Hacker
      }

      // Compare the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate a JWT token
      const token = jwt.sign({

         userId: user._id,
         email: user.email,
         username: user.username,
         // Add any other data you want to include in the token here
      }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.status(200).json({ email, username: user.username, userType: user.userType, token });
   } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
   }
};

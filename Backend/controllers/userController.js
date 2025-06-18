
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// controllers/userController.js

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Add additional required fields if your User model needs them
    // For example, if 'name' is required:
    // const { name } = req.body;
    // if (!name) return res.status(400).json({ message: 'Name is required' });

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Add other required fields here if needed
    const user = await User.create({
      email,
      password: hashedPassword,
      isAdmin: false, // Ensure isAdmin is set if your model requires it
      // name, // Uncomment if 'name' is required
    });

    const token = generateToken(user._id, user.isAdmin);
    res.status(201).json({ user, token }); // Return user for debugging
  } catch (err) {
    console.error('Error in registerUser:', err); // Log the error for debugging
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

// @desc    Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id, user.isAdmin);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

// @desc    Get current user
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Cannot fetch user', error: err.message });
  }
};


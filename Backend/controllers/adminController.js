// backend/controllers/adminController.js
import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import User from '../models/Contact.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    const admin = await Admin.create({ username, password });
    res.status(201).json({
      _id: admin._id,
      username: admin.username,
      token: generateToken(admin._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({
      _id: admin._id,
      username: admin.username,
      token: generateToken(admin._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all users' contact info for admin UI
export const getAllUserContacts = async (req, res) => {
  try {
    const users = await User.find({}, 'username email contact'); // Adjust fields as needed
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

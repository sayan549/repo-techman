// backend/routes/adminRoutes.js
import express from 'express';
import { registerAdmin, loginAdmin } from '../controllers/adminController.js';
const router = express.Router();

router.post('/register', registerAdmin);  // for initial admin setup (can disable later)
router.post('/login', loginAdmin);

export default router;

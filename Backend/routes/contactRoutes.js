import express from 'express';
import contactController from '../controllers/contactController.js';

const router = express.Router();

router.post('/', contactController.createContact);
router.get('/', contactController.getContacts); // <== Add this

export default router;

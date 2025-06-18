import express from 'express';
import projectController from '../controllers/projectController.js';

const router = express.Router();

router.get('/', projectController.getAllProjects);
router.post('/', projectController.createProject);

export default router;

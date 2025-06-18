import Project from '../models/Project.js';

const getAllProjects = async (_req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get projects', error: error.message });
  }
};

export const createProject = async (req, res) => {
  const { title, description, link } = req.body;

  try {
    const project = new Project({ title, description, link });
    await project.save();
    res.status(201).json({ message: 'Project created', project });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project', error: error.message });
  }
};

export default { getAllProjects, createProject };

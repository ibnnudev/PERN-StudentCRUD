import { findAll } from "../models/Student";
const getAll = async (req, res) => {
  try {
    const students = await findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAll };

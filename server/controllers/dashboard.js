import Student from '../models/student.js';
import Professor from '../models/professor.js';
import Parent from '../models/parent.js';
import RevisionPlan from '../models/revisionPlan.js';

// Your dashboard logic goes here
// You should use the following functions in your dashboard logic 👇:
// dashboard.routes.js 🚀

export default {
  // Student logic goes here 👨‍🎓
  getStudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ error: 'Failed to fetch students' });
    }
  },

  createStudent: async (req, res) => {
    try {
      const { studentClass, planId } = req.body;

      // Find the plan
      const plan = await RevisionPlan.findById(planId);
      if (!plan) {
        return res.status(404).json({ error: 'Plan not found' });
      }

      const student = new Student({ studentClass: studentClass, planEnrolledIn: planId });
      await student.save();

      res.status(201).json(student);
    } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).json({ error: 'Failed to create student' });
    }
  },

  updateStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const { studentClass } = req.body;
      const student = await Student.findByIdAndUpdate(id, { studentClass: studentClass }, { new: true });
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json(student);
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ error: 'Failed to update student' });
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findByIdAndDelete(id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ error: 'Failed to delete student' });
    }
  },

  // Professor logic goes here 👨‍🏫

  getProfessors: async (req, res) => {
    try {
      const professors = await Professor.find();
      res.status(200).json(professors);
    } catch (error) {
      console.error('Error fetching professors:', error);
      res.status(500).json({ error: 'Failed to fetch professors' });
    }
  },

  createProfessor: async (req, res) => {
    try {
      const { department } = req.body;
      const professor = new Professor({ department });
      await professor.save();
      res.status(201).json(professor);
    } catch (error) {
      console.error('Error creating professor:', error);
      res.status(500).json({ error: 'Failed to create professor' });
    }
  },

  updateProfessor: async (req, res) => {
    try {
      const { id } = req.params;
      const { department } = req.body;
      const professor = await Professor.findByIdAndUpdate(id, { department }, { new: true });
      if (!professor) {
        return res.status(404).json({ error: 'Professor not found' });
      }
      res.status(200).json(professor);
    } catch (error) {
      console.error('Error updating professor:', error);
      res.status(500).json({ error: 'Failed to update professor' });
    }
  },

  deleteProfessor: async (req, res) => {
    try {
      const { id } = req.params;
      const professor = await Professor.findByIdAndDelete(id);
      if (!professor) {
        return res.status(404).json({ error: 'Professor not found' });
      }
      res.status(200).json({ message: 'Professor deleted successfully' });
    } catch (error) {
      console.error('Error deleting professor:', error);
      res.status(500).json({ error: 'Failed to delete professor' });
    }
  },

  // Parent logic goes here 👵

  getParents: async (req, res) => {
    try {
      const parents = await Parent.find();
      res.status(200).json(parents);
    } catch (error) {
      console.error('Error fetching parents:', error);
      res.status(500).json({ error: 'Failed to fetch parents' });
    }
  },

  createParent: async (req, res) => {
    try {
      const { children } = req.body;
      const parent = new Parent({ children });
      await parent.save();
      res.status(201).json(parent);
    } catch (error) {
      console.error('Error creating parent:', error);
      res.status(500).json({ error: 'Failed to create parent' });
    }
  },

  updateParent: async (req, res) => {
    try {
      const { id } = req.params;
      const { children } = req.body;
      const parent = await Parent.findByIdAndUpdate(id, { children }, { new: true });
      if (!parent) {
        return res.status(404).json({ error: 'Parent not found' });
      }
      res.status(200).json(parent);
    } catch (error) {
      console.error('Error updating parent:', error);
      res.status(500).json({ error: 'Failed to update parent' });
    }
  },

  deleteParent: async (req, res) => {
    try {
      const { id } = req.params;
      const parent = await Parent.findByIdAndDelete(id);
      if (!parent) {
        return res.status(404).json({ error: 'Parent not found' });
      }
      res.status(200).json({ message: 'Parent deleted successfully' });
    } catch (error) {
      console.error('Error deleting parent:', error);
      res.status(500).json({ error: 'Failed to delete parent' });
    }
  }
};

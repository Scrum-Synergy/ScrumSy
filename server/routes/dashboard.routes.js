import express from 'express';
import dashboardController from '../controllers/dashboard';

const router = express.Router();

router.get('/getStudents', dashboardController.getStudents);
router.post('/createStudent', dashboardController.createStudent);
router.put('/:id/updateStudent', dashboardController.updateStudent);
router.delete('/:id/deleteStudent', dashboardController.deleteStudent);

router.get('/getProfessors', dashboardController.getProfessors);
router.post('/createProfessor', dashboardController.createProfessor);
router.put('/:id/updateProfessor', dashboardController.updateProfessor);
router.delete('/:id/deleteProfessor', dashboardController.deleteProfessor);

router.get('/getParents', dashboardController.getParents);
router.post('/createParent', dashboardController.createParent);
router.put('/:id/updateParent', dashboardController.updateParent);
router.delete('/:id/deleteParent', dashboardController.deleteParent);

module.exports = router;

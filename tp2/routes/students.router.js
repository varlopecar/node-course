const express = require('express');
const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../controllers/students.controller');
const router = express.Router();

// GET /students
// Get all students
router.get('/students', getAllStudents);

// GET /students/:id
// Get a single student by id
router.get('/students/:id', getStudentById);

// POST /students
// Create a new student
router.post('/students', createStudent);

// PUT /course/:id
// Update a student course by id
router.put('/course/:id', updateStudent);

// DELETE /students/remove/:id
// Delete a student's course by id
router.delete('/students/remove/:id', deleteStudent);

module.exports = router;
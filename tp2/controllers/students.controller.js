const students = require('../models/students');

// GET /students
// Get all students
const getAllStudents = (req, res) => {
    res.json(students);
}

// GET /students/:id
// Get a single student by id
const getStudentById = (req, res) => {
    const { id } = req.params;
    const foundStudent = students.find(student => student.id === id);
    res.json(foundStudent);
}

// POST /students
// Create a new student
const createStudent = (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json(students);
}

// PUT /course/:id
// Update a student by id
const updateStudent = (req, res) => {
    const { id } = req.params;
    const updatedStudent = req.body;
    const foundStudent = students.find(student => student.id === id);
    Object.assign(foundStudent, updatedStudent);
    res.json(students);
}

// DELETE /students/remove/:id
// Delete a student's course by id
const deleteStudent = (req, res) => {
    const { id } = req.params;
    const foundStudent = students.find(student => student.id === id);
    delete foundStudent.courses;
    res.json(students);
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}
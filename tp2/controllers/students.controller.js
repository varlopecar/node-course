const students = require('../models/students');

const getAllStudents = async (req, res) => {
    try {
        const allStudents = await students.find();
        res.json(allStudents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const foundStudent = await students.findById(id);
        res.json(foundStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createStudent = async (req, res) => {
    try {
        const student = req.body;
        const newStudent = await students.create(student);
        res.json(newStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStudent = req.body;
        const foundStudent = await students.findById(id);
        Object.assign(foundStudent, updatedStudent);
        const savedStudent = await foundStudent.save();
        res.json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const foundStudent = await students.findById(id);
        await foundStudent.remove();
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
        
module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}
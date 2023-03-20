const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    courses: {
        type: Object,
        required: true
    }
});

const Student = moongoose.model('students', studentSchema);

module.exports = Student;


// const students = [
//     {
//         id: '9656277-fc26-4eef-a7e7-274cf94c1aca',
//         name: 'John',
//         courses: {
//             English: 15,
//             Node: 12.5,
//             Java: 18
//         }
//     },
//     {
//         id: '39656277-fc26-4eef-a7e7-274cf94c1aca',
//         name: 'Jane',
//         courses: {
//             Java: 20,
//             Math: 10,
//         }
//     }
// ];

// module.exports = students;

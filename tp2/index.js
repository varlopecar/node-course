require("dotenv").config();
const express = require('express');
const app = express();
const port = 3006;
const mongoose = require("mongoose");
const students = require('./models/students');
const router = require('./routes/students.router');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

connectDB();

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
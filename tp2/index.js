const express = require('express');
const app = express();
const port = 3005;

app.use(express.json());

app.use('/', require('./routes/students.router'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
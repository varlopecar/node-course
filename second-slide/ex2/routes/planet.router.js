require("dotenv").config();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch(err => console.log(err));
    
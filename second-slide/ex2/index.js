require("dotenv").config();
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const planetRouter = require("./routes/planet.router");
const cors = require("cors");
const Planet = require("./models/planets.model");
const auth = require("./auth");

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch(err => console.log(err));

app.use(express.json());

app.use(cors());

app.use("/planets", planetRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
})

app.get("/login", auth, (req, res) => {
    res.json({ message: "You are logged in" });
})


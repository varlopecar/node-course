const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3002;
const { planets } = require('../models/planets');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

app.use(cors({
    origin: '*'
}));

app.use((req, res, next) => {
    // time now in milliseconds
    const now = new Date().getTime();
    next();
    const duration = new Date().getTime() - now;
    console.log(`Request took: ${duration}ms`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/messages', (req, res) => {
    res.send('<html><body><h1>Messages!</h1></body></html>');
});

app.get('/planets', (req, res) => {
    res.send(planets);
});

app.get('/planets/:id', (req, res) => {
    const planet = planets.find((planet) => planet.id === Number(req.params.id));
    res.send(planet);
});

app.get('/planets/color/:color', (req, res) => {
    const planet = planets.filter((planet) => planet.color === req.params.color);
    res.send(planet);
});

app.get('/planets/size/:size', (req, res) => {
    const planet = planets.filter((planet) => planet.size === Number(req.params.size));
    res.send(planet);
});

app.use((req, res) => {
    res.status(404).send('404: Page not Found');
});

app.post('/planets', (req, res) => {
    const planet = req.body;
    planets.push(planet);
    res.send('Got a POST request');
});

// delete a planet
app.delete('/planets/:id', (req, res) => {
    const planet = planets.find((planet) => planet.id === Number(req.params.id));
    const index = planets.indexOf(planet);
    planets.splice(index, 1);
    res.send('Got a DELETE request');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const PORT = 3000;
const { planets } = require('./planets');

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

app.delete('/planets/:id', (req, res) => {
    const planet = planets.find((planet) => planet.id === Number(req.params.id));
    const index = planets.indexOf(planet);
    planets.splice(index, 1);
    res.send('Got a DELETE request');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
const express = require('express');
const router = express.Router();
const Planet = require('../models/planets.model');
const { getPlanets, getPlanet, getColor, getSize, createPlanet, deletePlanet } = require('../controllers/planet.controller');

router.get('/', getPlanets);
router.get('/:id', getPlanet);
router.get('/color/:color', getColor);
router.get('/size/:size', getSize);
router.post('/', createPlanet);
router.delete('/:id', deletePlanet);

module.exports = router;
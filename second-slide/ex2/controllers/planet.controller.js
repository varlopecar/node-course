const Planet = require('../models/planets.model');

const getPlanets = async (req, res) => {
    try {
        const planets = await Planet.find();
        res.status(200).json(planets);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getPlanet = async (req, res) => {
    const { id } = req.params;
    try {
        const planet = await Planet.findById(id);
        res.status(200).json(planet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getColor = async (req, res) => {
    const { color } = req.params;
    try {
        const planet = await Planet.findOne({ color: color });
        res.status(200).json(planet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSize = async (req, res) => {
    const { size } = req.params;
    try {
        const planet = await Planet.findOne({ $lt: { size: size } });
        res.status(200).json(planet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createPlanet = async (req, res) => {
    const planet = req.body;
    const newPlanet = new Planet(planet);
    try {
        await newPlanet.save();
        res.status(201).json(newPlanet);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const deletePlanet = async (req, res) => {
    const { id } = req.params;
    try {
        await Planet.findByIdAndRemove(id);
        res.status(200).json({ message: "Planet deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getPlanets,
    getPlanet,
    getColor,
    getSize,
    createPlanet,
    deletePlanet
}
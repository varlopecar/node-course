const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: "Dark"
    },
    size: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Planet = mongoose.model("planets", planetSchema);

module.exports = Planet;
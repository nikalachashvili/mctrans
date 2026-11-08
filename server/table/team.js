const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: { type: Object, required: true },
    location: { type: Object, required: true },
    cover: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);

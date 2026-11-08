// ბლოგი
const mongoose = require("mongoose");

const MultilangText = {
    ka: { type: String, required: false },
    ru: { type: String, required: false },
    en: { type: String, required: false }
};

const CarsSchema = new mongoose.Schema({
    createDate: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: false,
    },
    body: {
        type: MultilangText,
        required: false,
    },
    cover: {
        type: String,
        required: false,
    },
    fwd: {
        type: String,
        required: false,
    },
    kolofi: {
        type: String,
        required: false,
    },
    dzravi: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("cars", CarsSchema);

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    name: {

        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    releaseDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
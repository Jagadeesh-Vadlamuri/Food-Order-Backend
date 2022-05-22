const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        default: 'Add to Cart'
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    },
    start: {
        type: Number
    }
})

const itemModel = mongoose.model('Food-Order', itemSchema);

module.exports = itemModel;
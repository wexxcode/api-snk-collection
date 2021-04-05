// src/product.js
const mongoose = require("mongoose");

// Create a mongoose schema, make title and createdAt be the properties and make them required
const productSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: String,
        required: true,
    },
    primaryColor: {
        type: String,
        required: true,
    }, 
    secondColor: {
        type: String,
        required: true,
    },   
    style: {
        type: String,
        required: true,
    },   
    number: {
        type: String,
        required: true,
    },
    itsMyNow: {
        type: String,
        required: false,
    },  
    thisIsNotMy: {
        type: String,
        required: false,
    }, 
    thisIsNotMyDate: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: String,
        required: false,
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
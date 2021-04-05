// src/productRouter.js
const express = require("express");
const Product= require("../products");

const productRouter = express.Router();

// List all products
productRouter.get("/", async (_, res) => {
  res.json(await Product.find({}));
});

// Read product by ID
productRouter.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  res.json(await Product.findById({ _id: productId }));
});

// Delete product by ID
productRouter.delete("/:productId", async (req, res) => {
  const { productId } = req.params;
  await Product.deleteOne({ _id: productId });
  res.status(204).send();
});

// Update product by ID
productRouter.put("/:productId", async (req, res) => {
  const { company, model, description, releaseYear, primaryColor, secondColor,
          style, number, itsMyNow, thisIsNotMy, thisIsNotMyDate, image
         } = req.body;
  const { productId } = req.params;
  res.json(await Product.updateOne({ _id: productId }, { 
              company, model, description, releaseYear, primaryColor, secondColor, 
              style, number, itsMyNow, thisIsNotMy,image, thisIsNotMyDate })
          );
});

// Create a product
productRouter.post("/", async (req, res) => {
  const { company, model, description, releaseYear, primaryColor, secondColor,
          style, number, itsMyNow, thisIsNotMy, thisIsNotMyDate, image } = req.body;
  res.json(await Product.create({
              model, company, model, description, releaseYear, primaryColor, secondColor,
              style, number, itsMyNow, thisIsNotMy, thisIsNotMyDate, image, createdAt: new Date() })
          );
});


module.exports = productRouter;
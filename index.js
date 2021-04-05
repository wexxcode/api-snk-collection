// index.js
const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./src/routes/productRouter");

const app = express();
app.use(cors());

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// Requests done to the base path /product should go through the productRouter
app.use("/product", productRouter);

const startApplication = async () => {
  await mongoose.connect("mongodb://localhost:27017/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    "Successfully connected to MongoDB at: mongodb://localhost:27017/product"
  );
  await app.listen(8000);
  console.log("Listening on 8000...");
};

startApplication();
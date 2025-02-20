const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Testing Statement
app.get("/", (req, res) => {
  res.send("Aloha from Node API & NodeMon");
});

// Mongo DataBase Connection Setup
mongoose
  .connect(
    "mongodb+srv://badattitudealpacacode:CyLY57KQTq8khxxS@backenddb.qlfg9.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Mongo DataBase!!!");
    app.listen(3333, () => {
      console.log("Howdy Partner: Viewing on port 3333");
    });
  })
  .catch(() => {
    console.log("Failed to Connect to Mongo DataBase");
  });

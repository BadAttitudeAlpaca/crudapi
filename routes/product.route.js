const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// Get All Products: Route
router.get("/", getProducts);

// Get Specific ID Product: Route
router.get("/:id", getProduct);

// Create New Product: Route
router.post("/", createProduct);

// Update Product Info: Route
router.put("/:id", updateProduct);

// Delete Product: Route
router.delete("/:id", deleteProduct);

module.exports = router;

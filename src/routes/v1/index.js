const express = require("express");

const v1Router = express.Router();
const productsRouter = require("./products.route");

v1Router.use("/products", productsRouter);

module.exports = v1Router;

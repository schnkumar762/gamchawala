const express = require("express");

const productsRouter = express.Router();

productsRouter.get("/ping", (req, res, next) => {
  console.log("product ping");
  return res.json({
    message: "Product controller is working well",
  });
});

productsRouter.get("/", (req, res, next) => {
  console.log("products fetch all pressed");
  return res.status(200).json({
    message: "products fetch all pressed",
  });
});

productsRouter.get("/:id", (req, res, next) => {
  console.log("products fetch one by id pressed", req.params.id);
  const idd = req.params.id;
  return res.status(200).json({
    message: "products fetched of id",
    idd,
  });
});

productsRouter.post("/", (req, res, next) => {
  console.log("create new product");
  return res.status(201).json({ message: "Created" });
});

productsRouter.put("/:id", (req, res, next) => {
  console.log("update new product");
  return res.json({ message: "Updated" });
});
productsRouter.delete("/:id", (req, res, next) => {
  console.log("delete by id");
  return res.json({ status: "deleted" });
});

productsRouter.delete("/", (req, res, next) => {
  console.log("delete all");
  return res.json({
    message: "delete all",
  });
});
module.exports = productsRouter;

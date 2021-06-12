import { Router } from "express";

// import database models
import Product from "../models/Product";

const router = Router(); // API gateway

/*
  CRUD
  Create - router.post
  Read - router.get
  Update - router.put
  Delete - router.delete
*/

// Create => /api/products/create

router.post("/create", async (req, res) => {
  try {
    const { name } = req.body;

    // validate duplicate product name
    const duplicateName = await Product.findOne({ name });
    if (duplicateName)
      return res
        .status(403)
        .json({ message: "Name already exists in the database" });

    // if no duplicate
    const product = await Product.create(req.body);

    // return product
    if (product)
      return res.status(200).json({ message: "Product successfully created" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
});

// Read => /api/products/

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    if (products) return res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
  }
});

// Get product data

router.get("/:id", async (req, res) => {
  try {
    // findById(:id) function on User model to return user data
    const product = await Product.findById(req.params.id);

    // send data as json
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

// Update => /api/products/:id/update

router.put("/:id/update", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (product)
      return res.status(200).json({ message: "Product successfully updated" });
  } catch (error) {
    console.error(error.message);
  }
});

// Delete => /api/products/:id/delete

router.delete("/:id/delete", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (product)
      return res.status(200).json({ message: "Product successfully deleted" });
  } catch (error) {
    console.error(error.message);
  }
});

export default router;

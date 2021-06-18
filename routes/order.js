import { Router } from "express";

// import database models
import Order from "../models/Order";

const router = Router(); // API gateway

// Read => /api/products/

router.get("/", async (req, res) => {
  try {
    const order = await Order.find({});

    if (order) return res.status(200).json(order);
  } catch (error) {
    console.error(error.message);
  }
});

// Get product data

router.get("/:id", async (req, res) => {
  try {
    // findById(:id) function on User model to return user data
    const order = await Order.findById(req.params.id);

    // send data as json
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

export default router;

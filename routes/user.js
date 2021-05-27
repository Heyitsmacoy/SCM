import { Router } from "express";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// import database models
import userModel from "../models/userModel";

const router = Router(); // API gateway

router.post("/create", async (req, res) => {
  try {
    req.body.password = await bycrypt.hash(req.body.password, 10);
    // if no duplicate
    const user = await userModel.create(req.body);

    // return product
    if (user)
      return res.status(200).json({ message: "User successfully created" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { name } = req.body;

    // if no duplicate
    const user = await userModel.findOne({ name });

    // return product
    if (!user) return res.status(400).json({ message: "User not found" });

    if (!(await bycrypt.compare(req.body.password, user.password)))
      return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(200).json(token);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
});

export default router;

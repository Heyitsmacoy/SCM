import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import "dotenv/config";

// API routes
import productRoute from "./routes/products";
import userRoute from "./routes/user";
import orderRoute from "./routes/order";

const app = express(); // initialize server

// middleware for the server to work to react
app.use(cors()); // 3000 -> 5000
// body parser = req.body
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true })); // cross-site request

// initialize APIs
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

// initialize database
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    // start server if successfully connected to db
    app.listen(process.env.PORT || 5000, () => {
      // server started
      console.log(`Server is running at port ${process.env.PORT || 5000}`);
    });
  }
);

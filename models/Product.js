import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    description: String,
    name: String,
    category: String,
    brand: String,
    price: Number,
    countInStock: Number,

    // orderId
  },
  { timestamps: true }
);
// createdAt date, updatedAt date

export default model("Product", productSchema);

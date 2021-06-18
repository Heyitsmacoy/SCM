import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    productId: String,
    name: String,
    category: String,
    supplier: String,
    price: Number,
    countInStock: Number,

    // orderId
  },
  { timestamps: true }
);
// createdAt date, updatedAt date

export default model("Product", productSchema);

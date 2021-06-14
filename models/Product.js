import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    productId: String,
    productName: String,
    category: String,
    supplier: String,
    price: Number,
    quantity: Number,

    // orderId
  },
  { timestamps: true }
);
// createdAt date, updatedAt date

export default model("Product", productSchema);

import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    quantity: Number,

    // orderId
  },
  { timestamps: true }
);
// createdAt date, updatedAt date

export default model("Product", productSchema);

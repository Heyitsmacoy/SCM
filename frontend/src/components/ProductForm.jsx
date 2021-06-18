import React, { useState } from "react";

import { useMutation } from "react-query";
import axios from "axios";

export default function ProductForm() {
  const [data, setData] = useState({
    id: "",
    name: "",
    category: "",
    brand: "",
    price: 0,
    countInStock: 0,
  });

  const { mutateAsync: addProduct, data: res } = useMutation(async () => {
    return await axios
      .post("/api/products/create", data)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct(data);

    e.target.reset();
  };

  return (
    <div>
      <h2>{res && res.message}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input type="text" name="description" onChange={handleChange} />
        </div>
        <div>
          <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Category: </label>
          <input type="text" name="category" onChange={handleChange} />
        </div>
        <div>
          <label>Supplier: </label>
          <input type="text" name="brand" onChange={handleChange} />
        </div>
        <div>
          <label>Price: </label>
          <input type="number" name="price" onChange={handleChange} />
        </div>
        <div>
          <label>Quantity: </label>
          <input type="number" name="countInStock" onChange={handleChange} />
        </div>
        <div className="AddproductBtn">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}

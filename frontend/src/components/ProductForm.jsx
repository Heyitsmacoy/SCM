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
      <form  className="form" onSubmit={handleSubmit}>
        <div>
          <label className= "form-label" >ID: </label>
          <input className="form-field" type="text" name="description" onChange={handleChange} />
        </div>
        <div>
          <label className= "form-label" >Name: </label>
          <input  className="form-field"  type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label className= "form-label" >Category: </label>
          <input   className="form-field"  type="text" name="category" onChange={handleChange} />
        </div>
        <div>
          <label className= "form-label" >Supplier: </label>
          <input  className="form-field"  type="text" name="brand" onChange={handleChange} />
        </div>
        <div>
          <label className= "form-label" >Price: </label>
          <input   className="form-field" type="number" name="price" onChange={handleChange} />
        </div>
        <div>
          <label className= "form-label" >Quantity: </label>
          <input   className="form-field" type="number" name="countInStock" onChange={handleChange} />
        </div>
   
          <button type="submit" className="AddproductBtn" >Add Product</button>
      
      </form>
    </div>
  );
}

import React, { useState } from "react";

import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductsTabData() {
  const { data, isLoading } = useQuery(["products"], async () => {
    return await axios
      .get("/api/products")
      .then((res) => res.data)
      .catch((err) => console.error(err));
  });

  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data && data.message}</h2>
      <h1>PRODUCTS</h1>
      <div className="table">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="row">
          <div className="column">
            <h3>Product ID</h3>
          </div>
          <div className="column">
            <h3>Product Name</h3>
          </div>
          <div className="column">
            <h3>Category</h3>
          </div>
          <div className="column">
            <h3>Supplier</h3>
          </div>
          <div className="column">
            <h3>Price</h3>
          </div>
          <div className="column">
            <h3>Quantity</h3>
          </div>
          <div className="column">
            <h3>Action</h3>
          </div>
        </div>
        <tbody>
        {data
        .filter((product) => {
          if (searchTerm === "") {
            return product;
          } else if (
            product.productName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return product;
          }
        })
        .map((product, index) => (
          <div key={index} className="row">
            <div className="column">
              <p>{product.productId}</p>
            </div>
            <div className="column">
              <p>{product.productName}</p>
            </div>
            <div className="column">
              <p>{product.category}</p>
            </div>
            <div className="column">
              <p>{product.supplier}</p>
            </div>
            <div className="column">
              <p>{product.price}</p>
            </div>
            <div className="column">
              <p>{product.quantity}</p>
            </div>
            <div className="column" id="action-padding">
              <Link to={`/editproduct/${product._id}`}>
                <button id="edit-button" className="outline-primary">edit</button>
              </Link>
              <button id="delete-button"
                className="outline-primary"
                onClick={async () => {
                  await axios.delete(`/api/products/${product._id}/delete`);
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}</tbody>
      </div>
    </div>
  );
}

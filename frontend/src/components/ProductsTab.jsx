import React, { useState } from "react";

import { useQuery } from "react-query";
import axios from "axios";

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
            <h3>#</h3>
          </div>
          <div className="column">
            <h3>Product Name</h3>
          </div>
          <div className="column">
            <h3>Price</h3>
          </div>
          <div className="column">
            <h3>Quantity</h3>
          </div>
        </div>
        <tbody>
        {data
        .filter((product) => {
          if (searchTerm === "") {
            return product;
          } else if (
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return product;
          }
        })
        .map((product, index) => (
          <div key={index} className="row">
            <div className="column">
              <p>{index+1}</p>
            </div>
            <div className="column">
              <p>{product.name}</p>
            </div>
            <div className="column">
              <p>{product.price}</p>
            </div>
            <div className="column">
              <p>{product.quantity}</p>
            </div>
          </div>
        ))}</tbody>
      </div>
    </div>
  );
}

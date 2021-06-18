import React, { useState } from "react";

import { useQuery } from "react-query";
import axios from "axios";

export default function ProductsTabData() {
  const { data, isLoading } = useQuery(["order"], async () => {
    return await axios
      .get("/api/order")
      .then((res) => res.data)
      .catch((err) => console.error(err));
  });

  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <div>Loading...</div>;

  function simplify(string) {
    if (string == "false") {
      return "No";
    } else return "Yes";
  }

  return (
    <div>
      <h2>{data && data.message}</h2>
      <h1 className="ProductTabTitle">ORDERS</h1>
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
            <h3>Order ID</h3>
          </div>
          <div className="column">
            <h3>Product Name</h3>
          </div>
          <div className="column">
            <h3>Total Price</h3>
          </div>
          <div className="column">
            <h3>Paid</h3>
          </div>
          <div className="column">
            <h3>Delivered</h3>
          </div>
        </div>
        <tbody>
          {data
            .filter((order) => {
              if (searchTerm === "") {
                return order;
              } else if (
                order.orderItems[0].name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return order;
              }
            })
            .map((order, index) => (
              <div key={index} className="row">
                <div className="column">
                  <p>{order._id}</p>
                </div>
                <div className="column">
                  <p>{order.orderItems[0].name}</p>
                </div>
                <div className="column">
                  <p>{order.totalPrice}</p>
                </div>
                <div className="column">
                  <p>{simplify(order.isPaid.toString())}</p>
                </div>
                <div className="column">
                  <p>{simplify(order.isDelivered.toString())}</p>
                </div>
              </div>
            ))}
        </tbody>
      </div>
    </div>
  );
}

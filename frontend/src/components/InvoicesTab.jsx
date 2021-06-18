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

  function paid(string) {
    if (string == "false") {
      return "Unpaid";
    } else return "Paid";
  }

  function delivered(string) {
    if (string == "false") {
      return "Undelivered";
    } else return "Delivered";

  }

  return (
    <div>
      <h2>{data && data.message}</h2>
      <h1 className="ProductTabTitle">INVOICES</h1>
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
            <h3>Order</h3>
          </div>
          <div className="column">
            <h3>
              Product <br /> Name
            </h3>
          </div>
          <div className="column">
            <h3>
              Total <br /> Price
            </h3>
          </div>
          <div className="column">
            <h3>
              Payment <br /> Status
            </h3>
          </div>
          <div className="column">
            <h3>
              Shipping <br /> Status
            </h3>
            <h3>Price</h3>
          </div>
          <div className="column">
            <h3>Status</h3>
          </div>
          <div className="column">
            <h3>User</h3>
          </div>
          <div className="column">
            <h3>Address</h3>
          </div>
          <div className="column">
            <h3>
              Payment <br /> Method
            </h3>
          </div>
          <div className="column">
            <h3>Date</h3>
          </div>
        </div>
        <tbody>
          {data
            .filter((order) => {
              if (searchTerm === "") {
                return order;
              } else if (
                order.orderItems[0].name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return order;
              }
            })
            .map((order, index) => (
              <div key={index} className="row">
                <div className="column" id="invoices-content">
                  <p>{order._id}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.orderItems[0].name}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.totalPrice}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{paid(order.isPaid.toString())}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{delivered(order.isDelivered.toString())}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.user}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.shippingAddress[0].address}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.paymentMethod}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.createdAt}</p>
                  <p>{order.updatedAt}</p>
                </div>
              </div>
            ))}
        </tbody>
      </div>
    </div>
  );
}

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

  function paid(string){
    if(string == "false") {
      return "Unpaid";
    }
    else return "Paid";
  }

  function delivered(string){
    if(string == "false") {
      return "Undelivered";
    }
    else return "Delivered";
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
            <h3>Payment Method</h3>
          </div>
          <div className="column">
            <h3>Date</h3>
          </div>
        </div>
        <tbody>
          {data
            /*.filter((order) => {
              if (searchTerm === "") {
                return order;
              } else if (
                order.name.toLowerCase().includes(searchTerm.toLowerCase())
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return order;
              }
            })*/
            .map((order, index) => (
              <div key={index} className="row">
                <div className="column" id="invoices-content">
                  <p>Order ID</p>
                  <p>{order._id}</p>
                  <p>Product Name:</p>
                  <p>{order.orderItems[0].name}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>Price: {order.orderItems[0].price}</p>
                  <p>Quantity: {order.orderItems[0].qty}</p>
                  <p>Tax: {order.taxPrice}</p>
                  <p>Shipping: {order.shippingPrice}</p>
                  <p>Total: {order.totalPrice}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{paid(order.isPaid.toString())}</p>
                  <p>{delivered(order.isDelivered.toString())}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.user}</p>
                </div>
                <div className="column" id="invoices-content">
                  <p>{order.shippingAddress[0].address}</p>
                  <p>{order.shippingAddress[0].city}</p>
                  <p>{order.shippingAddress[0].postalCode}</p>
                  <p>{order.shippingAddress[0].country}</p>
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

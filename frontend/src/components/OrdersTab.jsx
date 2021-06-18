import React from "react";

import { useQuery } from "react-query";
import axios from "axios";

export default function OrdersTabData() {
  const { data: res, isLoading } = useQuery(["orders"], async () => {
    return await axios
      .get("/api/order/")
      .then((res) => res.data)
      .catch((err) => console.error(err));
  });
  return (
    <div>
      <h1>ORDERS</h1>
      {!isLoading &&
        res.map((order) => (
          <div key={order._id} className="row">
            <div className="column">
              <p>{order._id}</p>
            </div>
            {/* <div className="column">
              <p>{order.name}</p>
            </div>
            <div className="column">
              <p>{order.category}</p>
            </div>
            <div className="column">
              <p>{order.brand}</p>
            </div>
            <div className="column">
              <p>{order.price}</p>
            </div>
            <div className="column">
              <p>{order.countInStock}</p>
            </div> */}
            <div className="column" id="action-padding">
              {/* <Link to={`/editorder/${order._id}`}>
                <button id="edit-button" className="outline-primary">
                  edit
                </button>
              </Link> */}
              <button
                id="delete-button"
                className="outline-primary"
                onClick={async () => {
                  await axios.delete(`/api/orders/${order._id}/delete`);
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

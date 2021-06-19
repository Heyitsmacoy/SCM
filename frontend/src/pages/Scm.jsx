import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import HomeTab from "../components/HomeTab";
import ProductsTab from "../components/ProductsTab";
import OrdersTab from "../components/OrdersTab";
import InvoicesTab from "../components/InvoicesTab";

export default function Scm() {
  const [component, setComponent] = useState(0);
  const history = useHistory();

  return (
    <div className="Home">
      <div className="navbar">
        <div className="brandName">
          <h1> SUPPLY CHAIN MANAGEMENT </h1>
        </div>
     
      <div className="tabs">
        
        <button onClick={() => setComponent(0)} type="submit">
          Home
        </button>
        <button onClick={() => setComponent(1)}  type="submit">
          Products
        </button>
        <button onClick={() => setComponent(2)}  type="submit">
          Orders
        </button>
        <button onClick={() => setComponent(3)}  type="submit">
          Invoices
        </button>

        <button
          class="btn-logout"
          type="submit"
          onClick={() => history.push("/")}
        >
          Log-Out
        </button>
      </div>
      </div>
      <div className="column">
        <div className="productBtn">
          <button onClick={() => setComponent(4)} class="btn" type="submit">
            Add Contents
          </button>
        </div>
      </div>
      <div className="contents">
        <div className="productSection">
          <div>
            <div>
              {component === 0 ? (
                <HomeTab />
              ) : component === 1 ? (
                <ProductsTab />
              ) : component === 2 ? (
                <OrdersTab />
              ) : component === 3 ? (
                <InvoicesTab />
              ) : component === 4 ? (
                <ProductForm />
              ) : (
                <HomeTab />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>Supply Chain Management for Toy Storey Products.</h3>
      </div>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";

export default function Scm() {
  const history = useHistory();
  return (
    <div className="Home">
      <div className="navbar">
        <div className="brandName">
          <h1> SUPPLY CHAIN MANAGEMENT </h1>
        </div>
      </div>
      <div className="tabs">
        <button class="btn" type="submit">
          Home
        </button>
        <button class="btn" type="submit">
          Products
        </button>
        <button class="btn" type="submit">
          Orders
        </button>
        <button class="btn" type="submit">
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
      <div className="column">
        <div className="productBtn">
          <button class="btn" type="submit">
            Add Contents
          </button>
          <button class="btn" type="submit">
            Remove Contents
          </button>
        </div>
      </div>
      <div className="contents">
        <div className="productSection"></div>
      </div>
      <div className="footer">
        <h3>Supply Chain Management for Toy Storey Products.</h3>
      </div>
    </div>
  );
}

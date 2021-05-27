import React from "react";

export default function Positions() {
  return (
    <div className="center">
      <div className="row">
        <form className="column">
          <div className="column">
            <label>Name: </label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="column">
            <label>Price: </label>
            <input type="number" name="price" placeholder="Price" />
          </div>
          <div className="column">
            <label>Quantity: </label>
            <input type="number" name="quantity" placeholder="Quantity" />
          </div>
          <div className="center">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

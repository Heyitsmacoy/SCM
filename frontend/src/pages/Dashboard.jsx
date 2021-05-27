import React, { useState } from "react";

import Products from "../components/Products";
import ProductForm from "../components/ProductForm";

export default function Dashboard() {
  const [component, setComponent] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setComponent(0)}>Products</button>
        <button onClick={() => setComponent(1)}>Add Product</button>
      </div>

      <div>
        <h2>Dashboard</h2>
      </div>

      <div>{component === 0 ? <Products /> : <ProductForm />}</div>
    </div>
  );
}

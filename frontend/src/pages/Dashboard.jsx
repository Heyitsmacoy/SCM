import React, { useState } from "react";

import ProductForm from "../components/ProductForm";
import ProductsTab from "../components/ProductsTab";
import OrdersTab from "../components/OrdersTab";
import InvoicesTab from "../components/InvoicesTab";

export default function Dashboard() {
  const [component, setComponent] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setComponent(0)}>Add PRODUCT</button>
        <button onClick={() => setComponent(1)}>Products</button>
        <button onClick={() => setComponent(2)}>Orders</button>
        <button onClick={() => setComponent(3)}>Invoices</button>
      </div>

      <div>
        <h2>Dashboard</h2>
      </div>

      <div>{
        component === 0 ? <ProductForm />:
        component === 1 ? <ProductsTab /> :
        component === 2 ? <OrdersTab /> :
        component === 3 ? <InvoicesTab /> :
        <ProductForm /> 
      }</div>
    </div>
  );
}

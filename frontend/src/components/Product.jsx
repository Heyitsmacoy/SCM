import React from "react";

export default function Product({ product }) {
  if (!product) return <div>Product Not Found...</div>;

  return (
    <div>
      <h4>{product.name}</h4>
      <p>
        {product.price} / {product.quantity}
      </p>
    </div>
  );
}

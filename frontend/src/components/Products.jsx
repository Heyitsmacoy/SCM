import React from "react";

import { useQuery } from "react-query";
import axios from "axios";

import Product from "./Product";

export default function Products() {
  const { data, isLoading } = useQuery(["products"], async () => {
    return await axios
      .get("/api/products")
      .then((res) => res.data)
      .catch((err) => console.error(err));
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

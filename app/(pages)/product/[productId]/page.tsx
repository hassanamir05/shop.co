"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

const ProductPage = () => {
  const params = useParams();

  const productId = params.productId;

  useEffect(() => {
    console.log("product id : ", productId);
  }, [productId]);

  return <h1>{productId}</h1>;
};

export default ProductPage;

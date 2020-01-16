import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../services/api";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await getProductById({ id });
      setProduct(response);
    };
    loadProduct();
  }, [id]);

  console.log(product);

  return (
    <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>
        URL: <a href={product.url}>{product.url}</a>
      </p>
    </div>
  );
};

export default Product;

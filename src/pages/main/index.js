import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";

import "./styles.css";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const { docs, ...productInfo } = await getProducts({ page });
      setProducts(docs);
      setProductInfo({ ...productInfo });
      setPage(page);
    };
    loadProducts();
  }, [page]);

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const renderProduct = product => (
    <article key={product._id}>
      <strong>{product.title}</strong>
      <p>{product.description}</p>
      <Link to={`/products/${product._id}`}>Access</Link>
    </article>
  );

  const renderActionButtons = () => (
    <div className="actions">
      <button disabled={page === 1} onClick={prevPage}>
        Previous
      </button>
      <button disabled={page === productInfo.pages} onClick={nextPage}>
        Next
      </button>
    </div>
  );

  return (
    <div className="product-list">
      {products.map(product => renderProduct(product))}
      {renderActionButtons()}
    </div>
  );
};

export default Main;

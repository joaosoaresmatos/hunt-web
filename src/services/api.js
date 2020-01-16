import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/api" });

export const getProducts = async ({ page }) => {
  const { data } = await api.get(`/products?page=${page}`);
  return data;
};

export const getProductById = async ({ id }) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export default api;

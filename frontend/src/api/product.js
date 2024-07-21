import client from "./client";

export const fetchAll = async () => {
  return await client.get("/products");
};

export const fetchById = async (id) => {
  return await client.get(`/products/${id}`);
};

import client from "./client";

export const fetchAll = async () => {
  return await client.get("/cart-items");
};

export const add = async (body) => {
  return await client.post("/cart-items/add", body);
};

export const update = async (body) => {
  return await client.put("/cart-items/update", body);
};

export const remove = async (body) => {
  return await client.delete("/cart-items/remove", { data: body });
};

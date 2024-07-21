import express from "express";
const router = express.Router();

import { CartItem, Product } from "../models/index.js";

router.get("/", async (req, res) => {
  try {
    const { count, rows } = await CartItem.findAndCountAll({
      include: [{ model: Product, required: true }],
    });

    return res.json({ count, data: rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Failed to get cart items : ${error.message}` });
  }
});

router.post("/add", async (req, res) => {
  const { ProductId } = req.body;

  if (isNaN(ProductId)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  try {
    const existingItem = await CartItem.findOne({ where: { ProductId } });

    if (!existingItem) {
      const newItem = await CartItem.create(
        { ProductId, quantity: 1 },
        { returning: true }
      );

      return res.status(201).json(newItem);
    } else {
      const [affectedRows, updatedItem] = await CartItem.update(
        { quantity: existingItem.quantity + 1 },
        { where: { ProductId }, returning: true }
      );

      return res.status(200).json(updatedItem[0]);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Failed to add product to cart : ${error.message}` });
  }
});

router.put("/update", async (req, res) => {
  const { ProductId, quantity } = req.body;

  if (isNaN(ProductId)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  try {
    const [affectedRows, updatedCartItem] = await CartItem.update(
      { quantity },
      { returning: true, where: { ProductId } }
    );

    if (affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Cart item of specified product id not found" });
    } else {
      return res.json(updatedCartItem[0]);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Failed to update cart item : ${error.message}` });
  }
});

router.delete("/remove", async (req, res) => {
  const { ProductId } = req.body;

  console.log(req.body);

  if (isNaN(ProductId)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  try {
    const result = await CartItem.destroy({ where: { ProductId } });

    if (!result) {
      return res.status(404).json({ message: "item not found" });
    }

    return res.json({ message: "Item delete success" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Failed to remove item form cart : ${error.message}` });
  }
});

export default router;

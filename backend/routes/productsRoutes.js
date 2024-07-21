import express from "express";
const router = express.Router();

import { Product } from "../models/index.js";


router.get("/", async (req, res) => {
  try {
    const { count, rows } = await Product.findAndCountAll({});

    return res.json({ count, data: rows });
  } catch (error) {
    res.status(500).json({
      message: `Failed to get products : ${error.message}`,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Sent id is invalid" });
  }

  try {
    const foundProduct = await Product.findOne({ where: { id } });

    if (!foundProduct) {
      return res
        .status(404)
        .json({ message: "Product with specified id NOT FOUND" });
    }

    return res.json(foundProduct);
  } catch (error) {
    return res.status(500).json({
      message: `Failed to get get product with id : ${error.message}`,
    });
  }
});


export default router;

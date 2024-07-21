import "dotenv/config";
import express from "express";
const app = express();
import cors from "cors";

import sequelize from "./configs/sequelize.js";
import productsRoutes from "./routes/productsRoutes.js";
import cartItemsRoutes from "./routes/cartItemsRoutes.js";

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRoutes);
app.use("/api/cart-items", cartItemsRoutes);

app
  .listen(process.env.PORT)
  .on("listening", () => {
    console.log(
      ` ✔  server listening on : http://localhost:${process.env.PORT}`
    );
    sequelize
      .authenticate()
      .then(() =>
        console.log(" ✔  connection to database has been established successfully.")
      )
      .catch((err) =>
        console.error(" ❌ unable to connect to the database:", err)
      );

    /* sequelize
      .sync({ force: false })
      .then(() => console.log(` 👍 Data synced`))
      .catch((err) => console.error(` 👎 Error syncing database : ${err}`))
    ; */
  })
  .on("error", (err) => {
    console.error(` ❌ failed to connect to server : ${err}`);
  });

import { DataTypes } from "sequelize";

import sequelize from "../configs/sequelize.js";


export default sequelize.define("CartItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const User = sequelize.define("room", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  thumbnailImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;

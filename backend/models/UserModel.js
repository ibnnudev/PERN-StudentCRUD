import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;
const Stundent = db.define(
  "students",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    student_code: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default user;

(async () => {
  db.sync();
})();

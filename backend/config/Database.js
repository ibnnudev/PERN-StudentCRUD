import { Sequelize } from "sequelize";
const db = new Sequelize("pernstudent", "postgres", "ibnu", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default db;

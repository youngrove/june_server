const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

module.exports = sequelize.define(
  "User",
  {
    id: { type: Sequelize.STRING(25), allowNull: false, primaryKey: true },
    password: { type: Sequelize.STRING(100), allowNull: false }
  },
  {
    timestamps: false
  }
);

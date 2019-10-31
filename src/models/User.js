const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "User",
  {
    id: { type: Sequelize.STRING(15), allowNull: false, unique: true },
    password: { type: Sequelize.STRING(10), allowNull: false }
  },
  { timestamps: false }
);

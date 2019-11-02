const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "Room",
  {
    roomName: {
      type: Sequelize.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    gotWindow: { type: Sequelize.BOOLEAN, allowNull: false },
    price: { type: Sequelize.INTEGER(15), allowNull: false },
    width: { type: Sequelize.INTEGER(15) },
    gotToilet: { type: Sequelize.BOOLEAN }
  },
  { timestamps: false }
);

const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "Room",
  {
    roomName: { type: Sequelize.STRING(25), allowNull: false },
    gotWindow: { type: Sequelize.BOOLEAN, allowNull: false },
    price: { type: Sequelize.INTEGER(15), allowNull: false },
    width: { type: Sequelize.INTEGER(15) },
    gotToliet: { type: Sequelize.BOOLEAN }
  },
  { timestamps: false }
);

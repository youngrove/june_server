const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "Room",
  {
    roomName: { type: Sequelize.STRING(15), allowNull: false },
    gotWindow: { type: Sequelize.BOOLEAN, allowNull: false },
    price: { type: Sequelize.INTEGER(10), allowNull: false },
    width: { type: Sequelize.INTEGER(10) },
    gotToliet: { type: Sequelize.BOOLEAN, allowNull: false }
  },
  { timestamps: false }
);

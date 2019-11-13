const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "Room",
  {
    roomName: {
      type: Sequelize.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    gotWindow: { type: Sequelize.BOOLEAN, allowNull: false },
    price: { type: Sequelize.INTEGER(15), allowNull: false },
    isAvailable: { type: Sequelize.BOOLEAN, allowNull: false },
    link: { type: Sequelize.STRING(300) }
  },
  { timestamps: false }
);

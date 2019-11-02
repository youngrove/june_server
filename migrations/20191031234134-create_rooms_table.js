"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "rooms",
      {
        roomName: { type: Sequelize.STRING(25), allowNull: false },
        gotWindow: { type: Sequelize.BOOLEAN, allowNull: false },
        price: { type: Sequelize.INTEGER(15), allowNull: false },
        width: { type: Sequelize.INTEGER(15) },
        gotToliet: { type: Sequelize.BOOLEAN }
      },
      { timestamps: false }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("rooms");
  }
};

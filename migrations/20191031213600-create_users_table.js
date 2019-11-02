"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "users",
      {
        id: { type: Sequelize.STRING(25), allowNull: false, unique: true },
        password: { type: Sequelize.STRING(100), allowNull: false }
      },
      { timestamps: false }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};

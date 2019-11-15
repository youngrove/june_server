const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.json")[env];
const { username, password, database, host, dialect } = config;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection is successful");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync();

module.exports = sequelize;
//prevent require multiple times require
global.sequelize = sequelize;

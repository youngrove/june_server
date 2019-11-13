const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
// const config = require("../../config/")[env];
// const { username, password, database, dialect, host } = config;

const sequelize = new Sequelize("june", "root", "", {
  dialect: "mysql",
  host: "localhost"
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

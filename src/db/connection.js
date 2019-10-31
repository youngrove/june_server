const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
// const config = require("../../config/")[env];
// const { username, password, database, dialect, host } = config;

// console.log(username, password);

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

module.exports.sequelize = sequelize;

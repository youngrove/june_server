const express = require("express");
const http = require("http");
const app = express();
const userRouter = require("./routes/userRouter");
const roomRouter = require("./routes/roomRouter");
const cors = require("cors");
const bodyParser = require("body-parser");

// const router = express.Router();
const PORT = process.env.NODE_ENV === "production" ? 3001 : 3002;

//Db connection
require("./src/db/connection");
require("dotenv").config();

// parse application/json
app.use(bodyParser.json());
app.use(cors());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/room", roomRouter);

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});

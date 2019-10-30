const express = require("express");
const http = require("http");
const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const router = express.Router();
const PORT = process.env.NODE_ENV === "production" ? 3001 : 3002;

// const corsOptions = {
//   origin: "http://localhost:" + PORT,
//   optionsSuccessStatus: 200
// };
// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});

// // router.get("*", (res, req) => {
// //   res.status(404).send("what?");
// // });

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

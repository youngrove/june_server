const express = require("express");
const Room = require("../src/controller/room");
const roomRouter = express.Router();

roomRouter.post("/enroll", Room.createRoom);
roomRouter.delete("/room", Room.deleteRoom);

module.exports = roomRouter;

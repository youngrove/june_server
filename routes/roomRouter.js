const express = require("express");
const Room = require("../src/controller/room");
const roomRouter = express.Router();

roomRouter.get("/", Room.getAllRoom);
roomRouter.post("/enroll", Room.createRoom);
roomRouter.delete("/:id", Room.deleteRoom);
roomRouter.patch("/:id", Room.editRoom);

module.exports = roomRouter;

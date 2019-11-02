const Room = require("../models/Room");

module.exports = {
  async createRoom(req, res) {
    try {
      const { roomName, gotWindow, price, width, gotToilet } = req.body;
      await Room.create({ roomName, gotWindow, price, width, gotToilet });
      return res.status(200).send("Created Room");
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async deleteRoom(req, res) {
    try {
      const roomName = req.body.roomName;
      await Room.destroy({ where: { roomName: roomName } });
      return res.status(200).send("Deleted Room");
    } catch (e) {
      res.status(400).send(e);
    }
  }
};

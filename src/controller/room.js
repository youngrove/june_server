const Room = require("../models/Room");

module.exports = {
  async getAllRoom(req, res) {
    try {
      const roomCollection = await Room.findAll();
      res.status(201).send(roomCollection);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  async createRoom(req, res) {
    try {
      const { roomName, gotWindow, price, isAvailable, link } = req.body;
      await Room.create({ roomName, gotWindow, price, isAvailable, link });
      return res.status(200).send("Created Room");
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async editRoom(req, res) {
    try {
      const { price, isAvailable, link } = req.body;
      await Room.update(
        { price, isAvailable, link },
        { where: { roomName: req.params.id } }
      );
      return res.status(200).send("Updated Room");
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async deleteRoom(req, res) {
    try {
      const roomName = req.params.id;
      await Room.destroy({ where: { roomName: roomName } });
      return res.status(200).send("Deleted Room");
    } catch (e) {
      res.status(400).send(e);
    }
  }
};

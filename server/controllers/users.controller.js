const io = require("../utills/socket");

const usersController = {
  async Message(req, res, next) {
    try {
      const message = req.body.message;

      io.getIO().emit("message", { action: "send", message: message });

      res.status(201).send({
        message,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = usersController;

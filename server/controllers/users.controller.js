const io = require("../utills/socket");

const usersController = {
  async Message(req, res, next) {
    try {
      const statements = req.body.statements;

      io.getIO().emit("message", { action: "send", statements });

      res.status(201).send({
        statements,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = usersController;

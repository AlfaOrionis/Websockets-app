const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.post("/message", usersController.Message);

module.exports = router;

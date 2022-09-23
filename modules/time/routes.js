var express = require("express");
const { checkToken } = require("../../middlewares/checkToken");
var router = express.Router();
const controller = require("./controller");

router.get("/", checkToken, controller.getCurrentTime);

module.exports = router;

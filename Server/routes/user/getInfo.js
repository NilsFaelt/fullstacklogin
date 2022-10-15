const express = require("express");
const getUserInfo = require("../../controlers/getInfo/getInfoController");
const router = express.Router();

router.post("/", getUserInfo);

module.exports = router;

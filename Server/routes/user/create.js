const { default: axios } = require("axios");
const express = require("express");
const createUser = require("../../controlers/create/createControler");
const router = express.Router();

router.post("/", createUser);

module.exports = router;

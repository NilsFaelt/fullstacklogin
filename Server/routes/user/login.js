const express = require("express");
const login = require("../../controlers/login/loginContreoller");
const router = express.Router();

router.post("/", login);

module.exports = router;

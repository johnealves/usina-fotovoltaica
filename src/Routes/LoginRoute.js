const express = require("express");

const router = express.Router();
const controllerLogin = require("../Controller/LoginController")

router.post("/login", controllerLogin.loginController);

module.exports = router
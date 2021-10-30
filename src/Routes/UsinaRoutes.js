const express = require("express");

const router = express.Router();
const usinaController = require("../Controller/UsinaController");

router.get("/usinas", usinaController.getUsinaData);

module.exports = router
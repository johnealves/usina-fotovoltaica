const express = require("express");

const router = express.Router();
const ClientController = require("../Controller/ClientController");

router.get("/clients", ClientController.getAllClients);

module.exports = router
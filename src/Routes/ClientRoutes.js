const express = require("express");

const router = express.Router();
const clientController = require("../Controller/ClientController");

router.get("/clients", clientController.getAllClients);
router.post("/client", clientController.newClientController);
router.put("/client", clientController.updateClientByIdController);
router.delete("/client", clientController.deleteClientByIdController);

module.exports = router
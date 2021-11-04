const express = require("express");

const validJWT = require("../middleware/validJWT");
const router = express.Router();
const clientController = require("../Controller/ClientController");

router.get("/clients", validJWT, clientController.getAllClients);
router.get("/client/:id", clientController.getClientById);
router.post("/client", clientController.newClientController);
router.put("/client/:id", clientController.updateClientByIdController);
router.delete("/client/:id", clientController.deleteClientByIdController);

module.exports = router
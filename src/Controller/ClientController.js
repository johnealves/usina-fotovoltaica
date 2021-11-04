const clientModel = require("../models/clientModel");
const clientService = require("../services/ClientService");
const invalidData = require("../util/invalidData");

const UNAUTHORIZED = 401;

const getAllClients = async(req, res, next) => {
  try {
    const { role } = req.user
    if (role !== "admin") throw invalidData("User unauthorized", UNAUTHORIZED);
    const clients = await clientModel.getAllClients()
  
    res.status(200).json(clients)
  } catch (error) {
    next(error)
  }
}

const getClientById = async(req, res, next) => {
  try {
    const { id } = req.params
    const client = await clientModel.getClientByIdModel(id)
  
    res.status(200).json(client)
  } catch (error) {
    next(error)
  }
}

const newClientController = async(req, res, next) => {
  try {
    const {numeroCliente, nomeCliente,usinas, password, email, role} = req.body
    const clients = await clientService.newClientService({numeroCliente, nomeCliente,usinas, password, email, role})

    res.status(201).json(clients)
  } catch (error) {
    next(error)
  }
}

const updateClientByIdController = async(req, res, next) => {
  try {
    const { id } = req.params
    const { numeroCliente, nomeCliente, usinas, password, email } = req.body

    const updated = await clientService.updateClientByIdService(
      { id, numeroCliente, nomeCliente, usinas, password, email }
    )

    res.status(200).json(updated);
  } catch (error) {
    next(error)
  }
}

const deleteClientByIdController = async(req, res, next) => {
  try {
    const { id } = req.params
    const deletedClient = await clientService.deleteClientByIdService(id)
    
    res.status(200).json({
      "message": `O cliente referente ao id ${id} foi removido do sistema`
    })
  } catch (error) {
    next(error)
  }


}

module.exports = {
  getAllClients,
  getClientById,
  newClientController,
  updateClientByIdController,
  deleteClientByIdController,
}
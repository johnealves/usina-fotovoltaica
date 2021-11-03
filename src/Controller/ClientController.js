const clientModel = require("../models/clientModel");
const clientService = require("../services/ClientService");

const getAllClients = async(req, res, next) => {
  try {
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
    const { numeroCliente, nomeCliente, usinas } = req.body
    const clients = await clientService.newClientService({numeroCliente, nomeCliente, usinas})

    res.status(201).json(clients)
  } catch (error) {
    next(error)
  }
}

const updateClientByIdController = async(req, res, next) => {
  try {
    const { id } = req.params
    const { numeroCliente, nomeCliente, usinas } = req.body

    const updated = await clientService.updateClientByIdService(
      { id, numeroCliente, nomeCliente, usinas }
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
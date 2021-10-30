const clientModel = require("../models/clientModel");

const newClientService = async ({numeroCliente, nomeCliente, usinas}) => {
  const client = await clientModel.newClientModel({numeroCliente, nomeCliente, usinas});

  return client;
}

const updateClientByIdService = async({ id, numeroCliente, nomeCliente, usinas }) => {
  const updated = await clientModel.updateClientByIdModel({ id, numeroCliente, nomeCliente, usinas })

  return updated;
}

const deleteClientByIdService = async(id) => {
  const deleted = await clientModel.deleteClientByIdModel(id)

  return deleted
}

module.exports = {
  newClientService,
  updateClientByIdService,
  deleteClientByIdService,
}
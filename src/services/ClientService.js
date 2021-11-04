const clientModel = require("../models/clientModel");
const { loginModel } = require("../models/loginModel");

const newClientService = async ({numeroCliente, nomeCliente,usinas, password, email, role}) => {
  const client = await clientModel.newClientModel({numeroCliente, nomeCliente,usinas, password, email, role});

  return client;
}

const loginService = async({ email, password }) => {
  const user = await loginModel({ email, password })

  return user;
}

const updateClientByIdService = async({ id, numeroCliente, nomeCliente, usinas, password, email }) => {
  const updated = await clientModel.updateClientByIdModel({ id, numeroCliente, nomeCliente, usinas, password, email  })

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
  loginService,
}
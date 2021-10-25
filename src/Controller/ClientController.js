const clientModel = require("../models/clientModel");

const getAllClients = async(req, res, next) => {
  try {
    const clients = await clientModel.getAllClients()
  
    res.status(200).json(clients)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllClients,
}
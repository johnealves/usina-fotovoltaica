const { initDbClientes, deleteCollectionCliente } = require("../models/clientModel")
const { deleteCollectionUsina, addUsina, initDbUsina } = require("../models/UsinaModels")
const clients = require("./dadosClientes.json");
const usina = require("./dadosUsina.json")

const initReferenceData = async () => {
  await deleteCollectionCliente()
  await initDbClientes(clients)
  await deleteCollectionUsina()
  await initDbUsina(usina)
  console.log("DB resetado")
}

module.exports = {
  initReferenceData
}
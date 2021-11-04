const connection = require("./connection")
const { ObjectId } = require("mongodb")

const getAllClients = async () => {
  return await connection()
    .then((db) => db.collection('clientes').find().toArray());
};

const getClientByIdModel = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return await connection()
    .then((db) => db
      .collection('clientes').findOne({'_id': new ObjectId(id)}));
};

const newClientModel = async ({numeroCliente, nomeCliente,usinas, password, email, role = "client"}) => {
  const result = await connection()
    .then((db) => db
      .collection('clientes').insertOne({numeroCliente, nomeCliente, usinas, password, email, role}));
  
  return {
    _id: result.insertedId,
    numeroCliente,
    nomeCliente
  };
};

const updateClientByIdModel = async({ id, numeroCliente, nomeCliente, usinas, password, email  }) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const result = await connection()
    .then((db) => {
      const clientId = new ObjectId(id);
      const newData = { numeroCliente, nomeCliente, usinas };
      return db.collection('clientes').findOneAndUpdate(
        { '_id': clientId },
        { $set: newData },
        { returnOriginal: false });
    }).then((result) => result.value);
  
  return {
    numeroCliente,
    nomeCliente,
    usinas,
  };
}

const deleteClientByIdModel = async(id) => {
  if (!ObjectId.isValid(id)) return null;

  await connection()
    .then((db) => db.collection('clientes').deleteOne({ '_id': new ObjectId(id) }));

  return {
    id,
  };
};

const initDbClientes = async (clientsArray) => {
  const result = await connection()
    .then((db) => db.collection('clientes').insertMany(clientsArray));
  
  return {
    _id: result.insertedId,
  };
};

const deleteCollectionCliente = async () => {
  await connection()
    .then((db) => db.collection("clientes").deleteMany())
}

module.exports = {
  getAllClients,
  getClientByIdModel,
  newClientModel,
  initDbClientes,
  deleteCollectionCliente,
  updateClientByIdModel,
  deleteClientByIdModel,
}
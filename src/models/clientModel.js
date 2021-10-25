const connection = require("./connection")

const getAllClients = async () => {
    return await connection()
      .then((db) => db.collection('clients').find().toArray());
  };

module.exports = {
    getAllClients,
}
const connection = require("./connection");

const getUsinaData = async () => {
    return await connection()
      .then((db) => db.collection('usina').find().toArray());
  };

const initDbUsina = async (usinaArray) => {
  const result = await connection()
    .then((db) => db.collection('usina').insertMany(usinaArray));
  
  return {
    _id: result.insertedId,
  };
};

const deleteCollectionUsina = async () => {
  await connection()
    .then((db) => db.collection("usina").deleteMany())
}

module.exports = {
  initDbUsina,
  deleteCollectionUsina,
  getUsinaData,
}
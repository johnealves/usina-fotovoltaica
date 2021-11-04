const connection = require("./connection")

const loginModel = async ({ email, password }) => {
  const result = await connection()
    .then((db) => db
      .collection('clientes').findOne({ email, password }));
  console.log(result)
  return result;
};

module.exports = {
  loginModel,
}
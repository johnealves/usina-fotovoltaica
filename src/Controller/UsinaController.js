const usinaModel = require("../models/UsinaModels");

const getUsinaData = async(req, res, next) => {
  try {
    const data = await usinaModel.getUsinaData()

    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUsinaData,
}
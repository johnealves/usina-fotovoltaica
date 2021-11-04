const createToken = require("../middleware/createToken");
const { loginService } = require("../services/ClientService");

const loginController = async(req, res, next) => {
  try {
    console.log(req.body)
    const userData = await loginService(req.body)
    const { password, ...user } = userData;
    const token = await createToken(user)

    res.status(200).json({ user, token });
  } catch (error) {
    next(error)
  }
}

module.exports = {
  loginController,
}
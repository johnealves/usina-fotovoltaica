const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors())

const routes = require("../Routes");
const errorMiddleware = require("../middleware/errorMiddlewares")

app.get("/", (req, res, next) => res.json({message: "Aplicação OK"}));

app.use("/", routes.clientRoutes);
app.use("/", routes.usinaRoutes);
app.use("/", routes.loginRoute);

app.use(errorMiddleware)

module.exports = app;
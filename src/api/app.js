const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express()

app.use(bodyParser.json())
app.use(cors())

const routes = require("../Routes")

app.use("/", routes.ClientRoute)

module.exports = app;
const express = require("express")
const cors = require("cors")
const { default: helmet } = require("helmet")
const morgan = require("morgan")
const api = require("./api/api")

const app = express()

// middlewares
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())

// router
app.use("/api", api)

module.exports = app

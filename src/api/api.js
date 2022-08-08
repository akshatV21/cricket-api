const { Router } = require("express")
const recordRouter = require("./routes/record-router")
const teamRouter = require("./routes/team-router")

const api = Router()

api.use("/teams", teamRouter)
api.use("/records", recordRouter)

module.exports = api

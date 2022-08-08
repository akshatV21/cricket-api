const { Router } = require("express")
const teamRouter = require("./routes/team-router")

const api = Router()

api.use("/teams", teamRouter)

module.exports = api

const { Router } = require("express")
const playerRouter = require("./routes/player-router")
const rankingsRouter = require("./routes/rankings-router")
const recordRouter = require("./routes/record-router")
const teamRouter = require("./routes/team-router")

const api = Router()

api.use("/teams", teamRouter)
api.use("/players", playerRouter)
api.use("/records", recordRouter)
api.use("/rankings", rankingsRouter)

module.exports = api

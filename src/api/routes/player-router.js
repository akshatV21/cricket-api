const { Router } = require("express")
const { httpGetAllBatsmen } = require("../controllers/player-controllers/batsmen-controller")

const playerRouter = Router()

// batsmen
playerRouter.get("batsmen/all", httpGetAllBatsmen)

module.exports = playerRouter

const { Router } = require("express")
const { httpGetAllBatsmen, httpGetSingleBatsmen } = require("../controllers/player-controllers/batsmen-controller")

const playerRouter = Router()

// batsmen
playerRouter.get("batsmen/all", httpGetAllBatsmen)

playerRouter.get("batsmen/:batsmenId", httpGetSingleBatsmen)

module.exports = playerRouter

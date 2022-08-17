const { Router } = require("express")
const {
  httpGetAllBatsmen,
  httpGetSingleBatsmen,
  httpGetSingleBatsmenStats,
} = require("../controllers/player-controllers/batsmen-controller")
const checkFormatParamter = require("../middlewares/checkFormat")

const playerRouter = Router()

// batsmen
playerRouter.get("/batsmen/all", httpGetAllBatsmen)
playerRouter.get("/batsmen/:batsmenId", httpGetSingleBatsmen)
playerRouter.get("/batsmen/stats/:batsmenId", checkFormatParamter, httpGetSingleBatsmenStats)

module.exports = playerRouter

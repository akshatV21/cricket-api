const { Router } = require("express")
const { httpGetBatsmenByStat } = require("../controllers/record-controllers/player-records/batsmen-records")
const {
  httpGetTeamsWithMostWins,
  httpGetTeamsWithMostMatches,
  httpGetTeamsWithMostLosses,
  httpGetEarliestTeams,
} = require("../controllers/record-controllers/team-records")
const { validateFormatParameter } = require("../middlewares/record-middlewares")

const recordRouter = Router()

// team record routes
recordRouter.get("/teams/mostMatches", validateFormatParameter, httpGetTeamsWithMostMatches)
recordRouter.get("/teams/mostWins", validateFormatParameter, httpGetTeamsWithMostWins)
recordRouter.get("/teams/mostLosses", validateFormatParameter, httpGetTeamsWithMostLosses)
recordRouter.get("/teams/earliestTeams", httpGetEarliestTeams)

// player record routes
// - batsmen
recordRouter.get("/players/batsmen/:record", validateFormatParameter, httpGetBatsmenByStat)

module.exports = recordRouter

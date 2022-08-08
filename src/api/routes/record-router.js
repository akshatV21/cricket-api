const { Router } = require("express")
const { httpGetTeamWithMostWins, httpGetTeamWithMostMatches } = require("../controllers/record-controller")
const { validateFormatParameter } = require("../middlewares/record-middlewares")

const recordRouter = Router()

// team record routes
recordRouter.get("/teams/mostMatches", validateFormatParameter, httpGetTeamWithMostMatches)

recordRouter.get("/teams/mostWins", validateFormatParameter, httpGetTeamWithMostWins)

module.exports = recordRouter

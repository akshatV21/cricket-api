const { Router } = require("express")
const { httpGetTeamRankings } = require("../controllers/rankings-controller")

const rankingsRouter = Router()

rankingsRouter.get("/team", httpGetTeamRankings)

module.exports = rankingsRouter

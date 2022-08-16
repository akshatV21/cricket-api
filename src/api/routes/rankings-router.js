const { Router } = require("express")
const { httpGetTeamRankings, httpGetPlayerRankings } = require("../controllers/rankings-controller")
const { validateFormatParamter, validatePlayerParamter } = require("../middlewares/rankings-middlewarse")

const rankingsRouter = Router()

rankingsRouter.get("/team", validateFormatParamter, httpGetTeamRankings)
rankingsRouter.get("/players", validateFormatParamter, validatePlayerParamter, httpGetPlayerRankings)

module.exports = rankingsRouter

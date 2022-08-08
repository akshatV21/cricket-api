const { Router } = require("express")
const { httpGetAllTeams, httpGetSingleTeamStats, httpGetSingleTeamByName } = require("../controllers/team-controller")
const checkFormatParamter = require("../middlewares/checkFormat")

const teamRouter = Router()

teamRouter.get("/all", httpGetAllTeams)

teamRouter.get("/:countryName", httpGetSingleTeamByName)

teamRouter.get("/:countryName/stats", checkFormatParamter, httpGetSingleTeamStats)

module.exports = teamRouter

const { Router } = require("express")
const { httpGetAllTeams, httpGetSingleTeamStats, httpGetSingleTeamByName } = require("../controllers/team-controller")
const checkFormatParamter = require("../middlewares/checkFormat")
const { validateCountryName } = require("../middlewares/team-middlewares")

const teamRouter = Router()

teamRouter.get("/all", httpGetAllTeams)

teamRouter.get("/:countryName", validateCountryName, httpGetSingleTeamByName)

teamRouter.get("/:countryName/stats", validateCountryName, checkFormatParamter, httpGetSingleTeamStats)

module.exports = teamRouter

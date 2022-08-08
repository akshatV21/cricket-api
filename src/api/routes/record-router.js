const { Router } = require("express")
const { httpGetMostMatches } = require("../controllers/record-controller")
const { validateFormatParameter } = require("../middlewares/record-middlewares")

const recordRouter = Router()

// team record routes
recordRouter.get("/teams/mostMatches", validateFormatParameter, httpGetMostMatches)

module.exports = recordRouter

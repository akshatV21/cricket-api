const TeamModel = require("../models/team-model")

const httpGetAllTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find()
    res.status(200).json({ teams })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

const httpGetSingleTeamByName = async (req, res) => {
  try {
    const team = await TeamModel.findOne({ countryName: req.params.countryName })
    if (!team) return res.status(400).json({ error: "Invalid country name!" })

    res.status(200).json(team)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

const httpGetSingleTeamStats = async (req, res) => {
  try {
    const team = await TeamModel.findOne({ countryName: req.params.countryName })
    if (!team) return res.status(400).json({ error: "Invalid country name!" })
    const teamStats = {}

    req.formats.forEach(format => {
      teamStats[format] = team.stats[format]
    })

    res.status(200).json({ teamStats })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

module.exports = { httpGetAllTeams, httpGetSingleTeamByName, httpGetSingleTeamStats }

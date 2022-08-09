const TeamModel = require("../models/team-model")
const { getFormattedTeams, getFormattedTeamsByFormat } = require("../helpers/record-helpers")

// most matches played
const httpGetTeamWithMostMatches = async (req, res) => {
  const format = req.format
  const teams = await TeamModel.find()

  if (format === "all") {
    teams.sort((a, b) => b["totalMatches"] - a["totalMatches"])
    const finalTeamsArray = getFormattedTeams(teams, "Matches")
    return res.status(200).json(finalTeamsArray)
  }

  if (format !== "all") {
    teams.sort((a, b) => b["stats"][req.format]["matchesPlayed"] - a["stats"][req.format]["matchesPlayed"])
    const finalTeamsArray = getFormattedTeamsByFormat(teams, format, "Matches")
    return res.status(200).json(finalTeamsArray)
  }
}

// most wins
const httpGetTeamWithMostWins = async (req, res) => {
  const format = req.format
  const teams = await TeamModel.find()

  if (req.format === "all") {
    teams.sort((a, b) => b["totalWins"] - a["totalWins"])
    const finalTeamsArray = getFormattedTeams(teams, "Wins")
    return res.status(200).json(finalTeamsArray)
  }

  if (format !== "all") {
    teams.sort((a, b) => b["stats"][req.format]["won"] - a["stats"][req.format]["won"])
    const finalTeamsArray = getFormattedTeamsByFormat(teams, format, "Won")
    return res.status(200).json(finalTeamsArray)
  }
}

module.exports = { httpGetTeamWithMostMatches, httpGetTeamWithMostWins }

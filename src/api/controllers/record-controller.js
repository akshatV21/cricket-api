const TeamModel = require("../models/team-model")
const { getFormattedTeams, getFormattedTeamsByFormat } = require("../helpers/record-helpers")

// most matches played
const httpGetTeamsWithMostMatches = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

// most wins
const httpGetTeamsWithMostWins = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

// most losses
const httpGetTeamsWithMostLosses = async (req, res) => {
  try {
    const format = req.format
    const teams = await TeamModel.find()

    if (req.format === "all") {
      teams.sort((a, b) => b["totalLost"] - a["totalLost"])
      const finalTeamsArray = getFormattedTeams(teams, "Lost")
      return res.status(200).json(finalTeamsArray)
    }

    if (format !== "all") {
      teams.sort((a, b) => b["stats"][req.format]["lost"] - a["stats"][req.format]["lost"])
      const finalTeamsArray = getFormattedTeamsByFormat(teams, format, "Lost")
      return res.status(200).json(finalTeamsArray)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

const httpGetEarlisetTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find({}, "countryName countryCode cricketBoard fullMember")
    teams.sort((a, b) => a.fullMember["since"] - b.fullMember["since"])

    if (req.query.direction === "desc") {
      teams.reverse()
    }
    res.status(200).json(teams)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

module.exports = { httpGetTeamsWithMostMatches, httpGetTeamsWithMostWins, httpGetTeamsWithMostLosses }

const TeamModel = require("../models/team-model")

// --------------------------------------------------------------------------------------------------------------------
// most matches played
const httpGetTeamWithMostMatches = async (req, res) => {
  const teams = await TeamModel.find()

  // when format is not specified
  if (req.format === "all") {
    teams.sort((a, b) => b["totalMatches"] - a["totalMatches"])

    const mostMatchesByTeamArray = teams.map(team => {
      const { countryName, cricketBoard, _id } = team._doc
      return { countryName, cricketBoard, totalMatches: team.totalMatches, _id }
    })

    return res.status(200).json({ teams: mostMatchesByTeamArray })
  }

  // when format is specified
  teams.sort((a, b) => b["stats"][req.format]["matchesPlayed"] - a["stats"][req.format]["matchesPlayed"])

  const mostMatchesByTeamArray = teams.map(team => {
    const { countryName, cricketBoard, _id } = team._doc
    return { countryName, cricketBoard, [`${req.format}Matches`]: team["stats"][req.format]["matchesPlayed"], _id }
  })
  return res.status(200).json({ teams: mostMatchesByTeamArray })
}

// --------------------------------------------------------------------------------------------------------------------
// most wins
const httpGetTeamWithMostWins = async (req, res) => {
  const teams = await TeamModel.find()

  // when format is not specified
  if (req.format === "all") {
    teams.sort((a, b) => b["totalWins"] - a["totalWins"])

    const mostWinsByTeamArray = teams.map(team => {
      const { countryName, cricketBoard, _id, ...rest } = team._doc
      return { countryName, cricketBoard, totalWins: team.totalWins, _id }
    })

    return res.status(200).json({ teams: mostWinsByTeamArray })
  }

  // when format is specified
  teams.sort((a, b) => b["stats"][req.format]["won"] - a["stats"][req.format]["won"])

  const mostMatchesByTeamArray = teams.map(team => {
    const { countryName, cricketBoard, _id, ...rest } = team._doc
    return { countryName, cricketBoard, [`${req.format}Wins`]: team["stats"][req.format]["won"], _id }
  })
  return res.status(200).json({ teams: mostMatchesByTeamArray })
}

module.exports = { httpGetTeamWithMostMatches, httpGetTeamWithMostWins }

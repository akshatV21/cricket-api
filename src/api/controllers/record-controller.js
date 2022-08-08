const TeamModel = require("../models/team-model")

const httpGetMostMatches = async (req, res) => {
  const teams = await TeamModel.find()

  if (req.format === "all") {
    teams.sort((a, b) => b["totalMatches"] - a["totalMatches"])

    const mostMatchesByTeamArray = teams.map(team => {
      const { countryName, cricketBoard, _id, ...rest } = team._doc
      return { countryName, cricketBoard, totalMatches: team.totalMatches, _id }
    })

    return res.status(200).json({ teams: mostMatchesByTeamArray })
  }
  teams.sort((a, b) => b["stats"][req.format]["matchesPlayed"] - a["stats"][req.format]["matchesPlayed"])

  const mostMatchesByTeamArray = teams.map(team => {
    const { countryName, cricketBoard, _id, ...rest } = team._doc
    return { countryName, cricketBoard, [`${req.format}Matches`]: team["stats"][req.format]["matchesPlayed"], _id }
  })
  return res.status(200).json({ teams: mostMatchesByTeamArray })
}

module.exports = { httpGetMostMatches }

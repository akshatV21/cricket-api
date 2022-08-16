const TeamRankingsModel = require("../models/ranking-models/team-ranking-model")
const PlayerRankingsModel = require("../models/ranking-models/player-ranking-model")

const httpGetTeamRankings = async (req, res) => {
  try {
    const format = req.format
    const teamRankings = await TeamRankingsModel.findOne({ format: format })

    res.status(200).json(teamRankings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

const httpGetPlayerRankings = async (req, res) => {
  try {
    const format = req.format
    const player = req.player
    const playerRankings = await PlayerRankingsModel.findOne({ format: format, players: player })
    res.status(200).json(playerRankings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

module.exports = { httpGetTeamRankings, httpGetPlayerRankings }

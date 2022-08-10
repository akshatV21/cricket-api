const TeamRankingsModel = require("../models/ranking-models/team-ranking-model")

const httpGetTeamRankings = async (req, res) => {
  try {
    // check format
    const format = req.query.format
    const validFormats = ["odi", "test", "t20i"]
    if (!format) return res.status(400).json({ error: "format is required!" })
    if (!validFormats.includes(format)) return res.status(400).json({ error: "format is invalid!" })

    const teamRankings = await TeamRankingsModel.findOne({ format: format })
    res.status(200).json(teamRankings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

module.exports = { httpGetTeamRankings }

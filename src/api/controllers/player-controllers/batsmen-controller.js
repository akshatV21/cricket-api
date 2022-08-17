const { BatsmenModel } = require("../../models/player-models/batsmen-model")

const httpGetAllBatsmen = async (req, res) => {
  try {
    const batsmen = await BatsmenModel.find()
    res.status(200).json(batsmen)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

const httpGetSingleBatsmen = async (req, res) => {
  try {
    const batsmen = await BatsmenModel.findOne({ _id: req.params.batsmenId })
    if (!batsmen) return res.status(400).json({ error: "Batsmen not found!" })

    res.status(200).json(batsmen)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

const httpGetSingleBatsmenStats = async (req, res) => {
  try {
    const batsmen = await BatsmenModel.findOne({ _id: req.params.batsmenId })
    if (!batsmen) return res.status(400).json({ error: "Batsmen not found!" })

    const playerStats = {}
    req.format.forEach(format => {
      playerStats[format] = batsmen.stats[format]
    })

    res.status(200).json(playerStats)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

module.exports = { httpGetAllBatsmen, httpGetSingleBatsmen, httpGetSingleBatsmenStats }

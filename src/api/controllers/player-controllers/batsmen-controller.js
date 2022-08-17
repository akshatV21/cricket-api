const { BatsmenModel } = require("../../models/player-models/batsmen-model")
const batter = require("../../../../tests/data/batsmen-data")

const httpGetAllBatsmen = async (req, res) => {
  try {
    const batsmen = await BatsmenModel.find()
    res.status(200).json(batsmen)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
  // const batsmen = new BatsmenModel(batter)
  // await batsmen.save()
  // res.json(batsmen)
}

const httpGetSingleBatsmen = async (req, res) => {
  try {
    const batsmen = await BatsmenModel.findById(req.params.batsmenId)
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
    req.formats.forEach(format => {
      playerStats[format] = batsmen.stats[format]
    })

    return res.status(200).json(playerStats)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error!" })
  }
}

module.exports = { httpGetAllBatsmen, httpGetSingleBatsmen, httpGetSingleBatsmenStats }

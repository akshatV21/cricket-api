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

module.exports = { httpGetAllBatsmen }

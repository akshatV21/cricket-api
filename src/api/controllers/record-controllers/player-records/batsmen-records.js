const { BatsmenModel } = require("../../../models/player-models/batsmen-model")

const httpGetBatsmenByStat = async (req, res) => {
  const batsmen = await BatsmenModel.findByStat(req.format, req.params.record)
  res.status(200).json(batsmen)
}

module.exports = { httpGetBatsmenByStat }

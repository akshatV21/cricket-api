const validateFormatParamter = (req, res, next) => {
  const format = req.query.format
  const validFormats = ["odi", "test", "t20i"]

  if (!format) return res.status(400).json({ error: "format is required!" })
  if (!validFormats.includes(format)) return res.status(400).json({ error: "format is invalid!" })

  req.format = format
  next()
}

const validatePlayerParamter = (req, res, next) => {
  const player = req.query.player
  const validValuesForPlayer = ["batsmen", "bowler", "allrounder"]

  if (!player) return res.status(400).json({ error: "player is required!" })
  if (!validValuesForPlayer.includes(player)) return res.status(400).json({ error: "player is invalid!" })

  req.player = player
  next()
}

module.exports = { validateFormatParamter, validatePlayerParamter }

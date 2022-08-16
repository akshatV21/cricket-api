const validateFormatParameter = (req, res, next) => {
  const format = req.query.format || "all"
  const validValues = ["test", "odi", "t20i", "all"]

  if (!validValues.includes(format)) {
    return res.status(400).json({ error: "Ivalid format paramter!" })
  }
  req.format = format
  next()
}

module.exports = { validateFormatParameter }

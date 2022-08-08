const checkFormatParamter = (req, res, next) => {
  const formatArray = req.query.format.split(",")
  if (formatArray.length === 0) return res.status(400).json({ error: "Please provide format!" })

  const validValues = ["test", "odi", "t20i"]
  formatArray.forEach(format => {
    if (!validValues.includes(format)) {
      return res.status(400).json({ error: `Ivalid format - ${format}` })
    }
  })

  req.formats = formatArray
  next()
}

module.exports = checkFormatParamter

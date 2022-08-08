const checkFormatParamter = (req, res, next) => {
  const formats = req.query.format
  if (!formats) return res.status(400).json({ error: "Please provide format!" })

  const formatArray = formats.split(",")

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

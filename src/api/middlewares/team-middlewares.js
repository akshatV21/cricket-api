const validateCountryName = (req, res, next) => {
  const countryName = req.params.countryName
  const validCountries = ["India", "Australia", "England", "SouthAfrica", "Pakistan", "Bangladesh", "Sri Lanka", "New Zealand"]

  if (!validCountries.includes(countryName)) {
    return res.status(400).json({ error: "Invalid country name!" })
  }
  next()
}

module.exports = { validateCountryName }

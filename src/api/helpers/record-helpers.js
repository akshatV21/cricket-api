const getFormattedTeams = (teams, record) => {
  const key = `total${record}`

  const teamsArray = teams.map(team => {
    const { countryName, countryShort, countryBoard, _id } = team._doc
    return { _id, countryName, countryShort, countryBoard, [key]: team[`total${record}`] }
  })

  return teamsArray
}

const getFormattedTeamsByFormat = (teams, format, record) => {
  const key = `${format}${record}`
  const statToLookFor = record === "Matches" ? "matchesPlayed" : record.toLowerCase()

  const teamsArray = teams.map(team => {
    const { countryName, countryShort, countryBoard, _id } = team._doc
    return { _id, countryName, countryShort, countryBoard, [key]: team["stats"][format][statToLookFor] }
  })

  return teamsArray
}

module.exports = { getFormattedTeams, getFormattedTeamsByFormat }

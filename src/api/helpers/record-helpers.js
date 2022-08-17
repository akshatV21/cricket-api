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

const getFormattedRecordsArray = (recordList, format, stat) => {
  const key = format === "all" ? "overallStats" : "stats"

  const finalArray = recordList.map(record => {
    const { name, team } = record._doc
    return { name, team, [stat]: record[key][stat] }
  })

  return finalArray
}

module.exports = { getFormattedTeams, getFormattedTeamsByFormat, getFormattedRecordsArray }

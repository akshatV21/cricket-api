const { Schema, model } = require("mongoose")

const playerSchemaForRankings = {
  rank: Number,
  rating: Number,
  player: {
    name: String,
    team: String,
  },
}

// main schema
const playerRankingsSchema = new Schema({
  rankingsFor: String,
  format: String,
  players: String,
  rankings: [],
})

// model
const PlayerRankingsModel = model("playerRanking", playerRankingsSchema)

module.exports = PlayerRankingsModel

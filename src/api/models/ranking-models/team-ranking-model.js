const { Schema, model } = require("mongoose")

const teamSchemaForRankings = {
  rank: Number,
  points: Number,
  team: {
    name: String,
    short: String,
  },
}

// main schema
const teamRankingsSchema = new Schema(
  {
    format: String,
    rankings: [teamSchemaForRankings],
  },
  { timestamps: true }
)

// model
const TeamRankingsModel = model("teamRanking", teamRankingsSchema)

module.exports = TeamRankingsModel

const { Schema, model } = require("mongoose")

const firstMatchesSchema = {
  year: Number,
  opponent: String,
}

const statsSchema = {
  matchesPlayed: Number,
  won: Number,
  lost: Number,
  drew: Number,
  tied: Number,
  noResults: Number,
  bsIndividualTeams: Object,
}

// main team schema
const teamSchema = new Schema(
  {
    countryName: String,
    countryShort: String,
    region: String,
    cricketBoard: {
      shortForm: String,
      fullForm: String,
    },
    fullMember: {
      status: Boolean,
      since: Number,
    },
    firstMatches: {
      test: firstMatchesSchema,
      odi: firstMatchesSchema,
      t20i: firstMatchesSchema,
    },
    stats: {
      test: statsSchema,
      odi: statsSchema,
      t20i: statsSchema,
    },
  },
  { timestamps: true }
)

const TeamModel = model("team", teamSchema)

module.exports = TeamModel

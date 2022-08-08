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

// virtuals
teamSchema.virtual("totalMatches").get(function () {
  return this.stats.test.matchesPlayed + this.stats.odi.matchesPlayed + this.stats.t20i.matchesPlayed
})

teamSchema.virtual("totalWins").get(function () {
  return this.stats.test.won + this.stats.odi.won + this.stats.t20i.won
})

teamSchema.virtual("totalLosses").get(function () {
  return this.stats.test.lost + this.stats.odi.lost + this.stats.t20i.lost
})

const TeamModel = model("team", teamSchema)

module.exports = TeamModel

const { Schema, model } = require("mongoose")

const firstMatchesSchema = {
  year: Number,
  opponent: String,
}

const batsmenStatSchema = {
  matchesPlayed: Number,
  totalRuns: Number,
  halfCenturies: Number,
  centuries: Number,
  doubleCenturies: Number,
  highestScore: Number,
  boundaries: {
    fours: Number,
    sixes: Number,
  },
}

// main batsmen schema
const batsmenSchema = new Schema(
  {
    name: String,
    team: String,
    firstMatches: {
      test: firstMatchesSchema,
      odi: firstMatchesSchema,
      t20i: firstMatchesSchema,
    },
    stats: {
      test: batsmenStatSchema,
      odi: batsmenStatSchema,
      t20i: batsmenStatSchema,
    },
  },
  { timestamps: true }
)

// model
const BatsmenModel = model("batsman", batsmenSchema)

module.exports = { BatsmenModel, firstMatchesSchema }

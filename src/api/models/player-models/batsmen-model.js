const { Schema, model } = require("mongoose")
const { getFormattedRecordsArray } = require("../../helpers/record-helpers")

const firstMatchesSchema = {
  year: Number,
  opponent: String,
}

const batsmenStatSchema = {
  matchesPlayed: Number,
  totalRuns: Number,
  average: Number,
  strikeRate: Number,
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

// virtuals
batsmenSchema.virtual("overallStats").get(function () {
  return {
    matchesPlayed: this.stats.odi.matchesPlayed + this.stats.t20i.matchesPlayed + this.stats.test.matchesPlayed,
    totalRuns: this.stats.odi.totalRuns + this.stats.t20i.totalRuns + this.stats.test.totalRuns,
    average: (this.stats.odi.average + this.stats.t20i.average + this.stats.test.average) / 3,
    strikeRate: (this.stats.odi.strikeRate + this.stats.t20i.strikeRate + this.stats.test.strikeRate) / 3,
    halfCenturies: this.stats.odi.halfCenturies + this.stats.t20i.halfCenturies + this.stats.test.halfCenturies,
    centuries: this.stats.odi.centuries + this.stats.t20i.centuries + this.stats.test.centuries,
    doubleCenturies: this.stats.odi.doubleCenturies + this.stats.t20i.doubleCenturies + this.stats.test.doubleCenturies,
    boundaries: {
      fours: this.stats.odi.boundaries.fours + this.stats.t20i.boundaries.fours + this.stats.test.boundaries.fours,
      sixes: this.stats.odi.boundaries.sixes + this.stats.t20i.boundaries.sixes + this.stats.test.boundaries.sixes,
    },
  }
})

// methods
batsmenSchema.methods.findByStat = async function (format, stat) {
  const batsmen = await this.find()

  if (format === "all") {
    batsmen.sort((a, b) => a.overallStats[stat] - b.overallStats[stat])
    const finalOutput = getFormattedRecordsArray(batsmen, format, stat)
    return finalOutput
  }

  if (format !== "all") {
    batsmen.sort((a, b) => a.stats[stat] - b.stats[stat])
    const finalOutput = getFormattedRecordsArray(batsmen, format, stat)
    return finalOutput
  }
}

// model
const BatsmenModel = model("batsman", batsmenSchema)

module.exports = { BatsmenModel, firstMatchesSchema }

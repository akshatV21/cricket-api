const { Schema, model } = require("mongoose")

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
batsmenSchema.virtual("totalMatches").get(function () {
  return this.stats.odi.matchesPlayed + this.stats.t20i.matchesPlayed + this.stats.test.matchesPlayed
})

batsmenSchema.virtual("totalRuns").get(function () {
  return this.stats.odi.totalRuns + this.stats.t20i.totalRuns + this.stats.test.totalRuns
})

batsmenSchema.virtual("overallAverage").get(function () {
  return this.stats.odi.average + this.stats.t20i.average + this.stats.test.average
})

batsmenSchema.virtual("overallStrikeRate").get(function () {
  return this.stats.odi.strikeRate + this.stats.t20i.strikeRate + this.stats.test.strikeRate
})

batsmenSchema.virtual("totalFours").get(function () {
  return this.stats.odi.boundaries.fours + this.stats.t20i.boundaries.fours + this.stats.test.boundaries.fours
})

batsmenSchema.virtual("totalSixes").get(function () {
  return this.stats.odi.boundaries.sixes + this.stats.t20i.boundaries.sixes + this.stats.test.boundaries.sixes
})

// methods
batsmenSchema.methods.findByStat = async function (format, stat) {
  const batsmen = await this.find()

  if (format === "all") {
    
  }
}

// model
const BatsmenModel = model("batsman", batsmenSchema)

module.exports = { BatsmenModel, firstMatchesSchema }

const app = require("../src/app")
const request = require("supertest")(app)
const { connectMongoose, disconnectMongoose } = require("../src/mongoose")
const { rankings_team_test } = require("./data/ranking-data")

describe("GET /api/rankings/team", () => {
  beforeAll(async () => {
    await connectMongoose()
  })

  afterAll(async () => {
    await disconnectMongoose()
  })

  it("returns error object when invalid format is passed", async () => {
    const res = await request.get("/api/rankings/team").query({ format: "invalid" }).send()
    const errOBJ = {
      error: "format is invalid!",
    }
    expect(res.body).toEqual(errOBJ)
  })

  it("returns error object when format is null", async () => {
    const res = await request.get("/api/rankings/team").query({ format: "" }).send()
    const errOBJ = {
      error: "format is required!",
    }
    expect(res.body).toEqual(errOBJ)
  })

  it("returns rankings when everything is correct", async () => {
    const res = await request.get("/api/rankings/team").query({ format: "test" }).send()
    console.log(res.body)
    expect(res.body).toEqual(rankings_team_test)
  })
})

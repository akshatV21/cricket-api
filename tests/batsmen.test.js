const app = require("../src/app")
const request = require("supertest")(app)
const { connectMongoose, disconnectMongoose } = require("../src/mongoose")
const batter = require("./data/batsmen-data")

describe("GET /api/players/batsmen/:batsmenId", () => {
  beforeAll(async () => {
    await connectMongoose()
  })

  afterAll(async () => {
    await disconnectMongoose()
  })

  it("returns error object when invalid id is passed", async () => {
    const res = await request.get("/api/players/batsmen/62fce9f2e7448400322435a2").send()
    const errorOBJ = {
      error: "Batsmen not found!",
    }
    expect(res.body).toEqual(errorOBJ)
  })

  it("return batsmen object when valid id is passed", async () => {
    const res = await request.get("/api/players/batsmen/62fce9f2e7448400322435b1").send()
    const batsmenOBJ = batter
    expect(res.body).toEqual(batsmenOBJ)
  })
})

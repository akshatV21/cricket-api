const { default: mongoose } = require("mongoose")
const app = require("./app")
const { connectMongoose } = require("./mongoose")

const PORT = process.env.PORT || 8080

connectMongoose()

mongoose.connection.on("connected", () => {
  app.listen(PORT, () => {
    console.log("Listening to requests: http://localhost:8080/")
  })
})

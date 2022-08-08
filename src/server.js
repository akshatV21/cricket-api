const { default: mongoose } = require("mongoose")
const app = require("./app")

const PORT = process.env.PORT || 8080

mongoose.connect("")

mongoose.connection.on("connected", () => {
  app.listen(PORT, () => {
    console.on("Listening to requests: http://localhost:8080/")
  })
})

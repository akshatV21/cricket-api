const { default: mongoose } = require("mongoose")
const app = require("./app")

const PORT = process.env.PORT || 8080

mongoose.connect("mongodb+srv://akshat21:aku1985pika@cluster0.ew0oz.mongodb.net/cricket?retryWrites=true&w=majority")

mongoose.connection.on("connected", () => {
  app.listen(PORT, () => {
    console.log("Listening to requests: http://localhost:8080/")
  })
})

const { default: mongoose } = require("mongoose")

const connectMongoose = async () => {
  await mongoose.connect("mongodb+srv://akshat21:aku1985pika@cluster0.ew0oz.mongodb.net/cricket?retryWrites=true&w=majority")
}

const disconnectMongoose = async () => {
  await mongoose.disconnect()
}

mongoose.connection.on("error", err => {
  console.log(err)
})

module.exports = { connectMongoose, disconnectMongoose }

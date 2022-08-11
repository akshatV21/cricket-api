require("dotenv").config()
const { default: mongoose } = require("mongoose")

const connectMongoose = async () => {
  await mongoose.connect(process.env.MONGO_URI)
}

const disconnectMongoose = async () => {
  await mongoose.disconnect()
}

mongoose.connection.on("error", err => {
  console.log(err)
})

module.exports = { connectMongoose, disconnectMongoose }

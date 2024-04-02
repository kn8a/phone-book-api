// const coachFinderDB = require("mongoose")
// //const dotenv = require('dotenv').config()

// const connectCoachFinderDb = async () => {
//   try {
//     const conn = await coachFinderDB.connect(process.env.MONGO_URI_COACHFINDER)
//     console.log(`coachFinder DB connected ${conn.connection.host}`)
//   } catch (error) {
//     console.log(error)
//     process.exit(1) //close process with failure 1
//   }
// }

// module.exports = connectCoachFinderDb
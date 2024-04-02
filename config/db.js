const mongoose = require("mongoose")
//const dotenv = require('dotenv').config()

const connectDb = async () => {
  try {
    // Connect to the first database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`First MongoDB connected: ${conn.connection.host}`);

    
  } catch (error) {
    console.error(error);
    process.exit(1); // Close process with failure 1
  }
};

module.exports = connectDb
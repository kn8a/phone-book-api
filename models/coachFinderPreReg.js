const mongoose = require("mongoose")



const coachFinderPreRegSchema = mongoose.Schema(
    {
        type: {
          type: String,
          required: [true, "Please add a type"],
        },
        name: {
          type: String,
          required: [true, "Please add a name"],
        },
        age: {
          type: Number,
          required: [true, "Please add an age"],
        },
        gender: {
          type: String,
          required: [true, "Please add a gender"],
          enum: ["ชาย", "หญิง"], // Ensure gender is one of the specified values
        },
        email: {
          type: String,
          required: [true, "Please add an email"],
          match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validate email format
            "Please add a valid email",
          ],
        },
        services: {
          type: [String], // Array of strings
          required: [true, "Please add at least one service"],
        },
        expertise: {
          type: Map,
          of: Number, // Values are numbers
          required: [true, "Please add expertise for each service"],
        },
      },
      {
        timestamps: true,
      }
)

module.exports = mongoose.model("CoachFinderPreReg", coachFinderPreRegSchema)
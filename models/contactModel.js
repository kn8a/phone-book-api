const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
    {
        name_first: {
            type: String,
            required: [true, "Please add a name"],
          },
          name_last: {
            type: String,
            required: [true, "Please add a last name"],
          },
          tel: {
            type: String,
            required: [true, "Please add a phone number"],
          },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Contact", contactSchema)
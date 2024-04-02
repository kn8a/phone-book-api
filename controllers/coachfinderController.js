const asyncHandler = require("express-async-handler")
const CoachFinderPreReg = require("../models/coachFinderPreReg")
const sanitize = require("mongo-sanitize");

const { MailtrapClient } = require("mailtrap")
const client = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN })
const sender = {
  name: "coachfinder",
  email: process.env.MAILTRAP_SENDER_EMAIL,
}

const coachFinderEmail = process.env.COACHFINDER_TO_EMAIL 

const print = (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: "ok" })
}

const preReg = asyncHandler(async (req, res) => {
  req.body = sanitize(req.body)
  console.log(req.body)
  const { name, type, age, gender, email, services, expertise, expertiseSimple } = req.body

  if (!name || !type || !email || !age || !gender || !services || !expertise) {
    res.status(400).json({ message: "Please fill out all required fields" })
    return
  }

  const emailExists = await CoachFinderPreReg.findOne({ email })

  if (emailExists) {
    res.status(400).json({ message: `Record with this email already exists` })
    return
  }

  const newPreReg = await CoachFinderPreReg.create({
    name,
    email,
    type,
    age,
    gender,
    services,
    expertise,
    expertiseSimple
  })

  if (newPreReg) {
    res
    .status(200)
    .json({ message: "Form submitted successfully"})
    
    
      
    client.send({
        from: sender,
        to: [{ email: coachFinderEmail }],
        subject: `CoachFinder Pre-Registration`,
        text: `
                Registration details: 
                
                type: ${type}
                email: ${email}
                name: ${name}
                age: ${age}
                gender: ${gender}
                topics: ${services}
                expertise: ${expertiseSimple}
                `,
      })
    } else {
        res.status(400).json({ message: "Failed to submit, please retry." })
    }
})

module.exports = { print, preReg }

const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

// /api/phonebook/contacts - GET
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ name_last: 1 })
  res.status(200).json({ contacts: contacts })
})

// /api/phonebook/contacts/ - POST
const addContact = asyncHandler(async (req, res) => {
  //check for blank fields
  if (!req.body.name_first || !req.body.name_last || !req.body.tel) {
    res.status(400).json({ message: "Please fill out all fields and retry" })
    return
  }
  //create contact
  const contact = await Contact.create(req.body)
  res.status(200).json({ message: "contact added" })
})

// /api/phonebook/contacts/ - PUT
const editContact = asyncHandler(async (req, res) => {
  //check for blank fields
  if (!req.body.name_first || !req.body.name_last || !req.body.tel) {
    res
      .status(400)
      .json({ message: "Please make sure there are no blank fields and retry" })
    return
  }
  //update contact
  const contact = await Contact.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  })

  res.status(200).json({ message: "contact updated" })
})

// /api/phonebook/contacts/ - DEL
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.body.contact._id)

  res.status(200).json({ message: "contact deleted" })
})

module.exports = { getContacts, addContact, editContact, deleteContact }

var express = require("express")
var router = express.Router()
const {
  getContacts,
  addContact,
  editContact,
  deleteContact,
} = require("../controllers/phonebookController")

// /api/phonebook/contacts
router.get("/contacts", getContacts)
router.post("/contacts", addContact)
router.put("/contacts", editContact)
router.delete("/contacts", deleteContact)

module.exports = router

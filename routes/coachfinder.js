var express = require("express")
var router = express.Router()
const {
  print, preReg
} = require("../controllers/coachfinderController")

// /api/phonebook/contacts
router.post("/print", print)
router.post("/prereg", preReg)
// router.post("/contacts", addContact)
// router.put("/contacts", editContact)
// router.delete("/contacts", deleteContact)


module.exports = router

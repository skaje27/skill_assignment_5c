const express = require('express')
const authorController = require("../controllers/authorController")
// const {checkAuthenticate} = require("../middleware/middleware")

const router = express.Router()

router.post('/login',authorController.auhenticateAuthor)
router.post('/register',authorController.registerAuthor)

module.exports = router
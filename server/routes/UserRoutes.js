const express = require("express")
const router = express.Router()

// Controller
const {register, login, getCurrentUser} = require("../controllers/UserController")

// Middlewares
const validate = require("../middlewares/handleValidation")
const { 
    useCreateValidation,
    loginValidation,
 } = require("../middlewares/userValidations")

router.post("/register" , useCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)

module.exports = router
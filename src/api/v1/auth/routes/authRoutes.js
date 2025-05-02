const express = require('express')
const { sendOtpContoller } = require('../controllers/sendOtpController')


const authRouter = express.Router()

authRouter.post('/otp' , sendOtpContoller)

module.exports = {
    authRouter
}
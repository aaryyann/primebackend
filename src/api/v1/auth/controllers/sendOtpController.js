const { sendOtpMail } = require("../../../../utils/emailHelper")

const sendOtpContoller = async ( req , res ) => {

    const {email} = req.body
    const otp = Math.floor(Math.random()*9000 + 1000)

    await sendOtpMail({otp , email})
}

module.exports = {
    sendOtpContoller
}
const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema ({
    email : {type : String , require : true , trim : true} ,
    otp : {type : String , require : true , trim : true}
}, {
    timestamps : true
})


const otpModel = mongoose.model('opt' , otpSchema)

module.exports = {
    otpModel
}
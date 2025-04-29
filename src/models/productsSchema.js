const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title : {type : String , required : true} , 
    price : {type : Number , required : true} ,
    stock : {type : Number , required : true , min : 0},
    tags  : {
        type : [String]
    }
})

const productModel = mongoose.model('product' , productSchema)

module.exports = {
    productModel
}
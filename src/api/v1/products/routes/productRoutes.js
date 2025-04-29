const express = require("express")
const productRouter = express.Router()
const {getProductsController} = require('../controllers/getProductsController')
const { addProductsController } = require("../controllers/addProductsController")
const { validateAddProductDto } = require("../dto/validateAddProductDto")

productRouter.get('/' , getProductsController)

productRouter.post('/' ,  validateAddProductDto , addProductsController)

productRouter.put('/' , (req , res) => {
    console.log("Request Received");

    res.status(200).json({
        status : "PUT",
        msg : "Working on it"
    });
})

productRouter.delete('/' , (req , res) => {
    console.log("Request Received");

    res.status(200).json({
        status : "DELETE",
        msg : "Working on it"
    });
})

module.exports = {
    productRouter
}


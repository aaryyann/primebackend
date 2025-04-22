const express = require("express")
const productRouter = express.Router()

productRouter.get('/' , (req , res) => {
    console.log("Request Received");

    res.status(200).json({
        status : "GET",
        msg : "Working on it"
    });
})
productRouter.post('/' , (req , res) => {
    console.log("Request Received");

    res.status(200).json({
        status : "POST",
        msg : "Working on it"
    });
})
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


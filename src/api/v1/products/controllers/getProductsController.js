const { readData } = require('../services/readData')

const getProductsController = async (req , res) => {
    console.log("Request Received");

    res.status(200).json({
        status : "GET",
        data : "Working on it"
    });
}

module.exports = {
    getProductsController
}
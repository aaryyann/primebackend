const { rejects } = require('assert')
const { productModel } = require('../../../../models/productsSchema')
const { readData } = require('../services/readData')

const getProductsController = async (req , res) => {

    const {query = 1 , limit = 6 , search = ""} = req.query
    

    let mongooseQuery = productModel.find({})

    const regexmatch = new RegExp(search , 'i')

    mongooseQuery.where('title').regex(regexmatch)
    const queryClone = mongooseQuery.clone()

    const productList = await mongooseQuery
    
    const totalProduct = await queryClone.countDocuments()

    mongooseQuery = mongooseQuery.sort("_id").skip((query-1)*limit)
    mongooseQuery = mongooseQuery.sort("_id").limit(limit)

    await new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve()
        } , 5000)
    })
    res.status(200).json({
        productList,
        query , 
        limit , 
        totalProduct
    })
}

module.exports = {
    getProductsController
}
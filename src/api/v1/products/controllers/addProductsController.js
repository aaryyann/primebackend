const { title } = require("process");
const { productModel } = require("../../../../models/productsSchema");

const addProductsController = async(req , res) => {
    
    const newProducts = await productModel.create({
        title : req.body.title,
        price : req.body.price,
        stock : req.body.stock
    })

    res.status(201).json({
        status : "Created",
        product : {newProducts}
    });
}

module.exports = {
    addProductsController
}
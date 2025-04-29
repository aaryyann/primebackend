const { title } = require("process");
const { productModel } = require("../../../../models/productsSchema");

const addProductsController = async(req , res) => {

    try{

        const newProducts = await productModel.create({
            title : req.body.title,
            price : req.body.price,
            stock : req.body.stock,
            tags : req.body.tags
        })


        res.status(201).json({
            status : "Created",
            product : {newProducts}
        });

    }
    catch(e){
        console.log("Error specified" , e)
    }
}

module.exports = {
    addProductsController
}
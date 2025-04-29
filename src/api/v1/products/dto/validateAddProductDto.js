const validateAddProductDto = (req , res , next) => {

    const {title , price , stock} = req.body

    try{

        if(title == undefined || title == null || title.length < 2 || typeof title != "string"){
            throw new Error ("Invalid title")
        }
        if(price == undefined || price == null  || typeof price != "number" || Number(price) < 0){
            throw new Error ("Invalid price")
        }
        if(stock != undefined && stock != null){
            if(isNaN(Number(stock)) || Number(stock) < 0){
                throw new Error ("Invalid Stock")
            }
        }

        next()

    }
    catch(e){

        res.status(404).json({
            status : 'Failed',
            message : e.message
        })
    }
}

module.exports = {
    validateAddProductDto
}
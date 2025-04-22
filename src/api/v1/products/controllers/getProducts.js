const { readData } = require('../services/readData')

const getProduct = async (req  , res) => {
    try{

        const data = readData
        res.status(200).send({
            data
        })
    }
    catch(e){
        console.log('Error Found' , e)
    }
};

module.exports = {
    getProduct
}
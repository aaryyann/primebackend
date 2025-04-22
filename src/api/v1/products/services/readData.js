const fsPromise = require('fs/promises')


const readData = async () => {
    
    const productData = await fsPromise.readFile('/data.json' , 'utf-8')
    const parsedData = JSON.parse(productData)

    return parsedData
}

module.exports = {
    readData
}
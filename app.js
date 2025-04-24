const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
const morgan = require("morgan")
const mongoose = require('mongoose')
const {productRouter} = require('./src/api/v1/products/routes/productRoutes')
const app = express()

const PORT = 2200 
const DB_URL = process.env.MONGODB_URL

app.use(express.json())

app.use(morgan('dev'))
app.use('/api/v1/products' , productRouter)


const main = async() => {

    await mongoose.connect(`${DB_URL}`).then(() => {
        console.log('DB Connected')
    }).catch((e) => {
        console.log("Error Occured" , e)
    })
    app.listen(`${PORT}` , () => {
        console.log(`The server is running on ${PORT}`)
    })
}

main()
require('dotenv').config()


const express = require('express')
const app = express()
const cors = require('cors')

const connection = require('./inc/connection')
const tables = require('./inc/tables')

const router = require('./routes/index')

router(app, express)
tables.init(connection)

app.use(cors({
    origin: 'http://localhost:3000'
}))


app.listen(process.env.PORT || 3000, (error) => {
    if(error){
        console.log('deu erro -> ', error.message)
    }else{
        console.log(`rodando na porta ${process.env.PORT || 3000}`)
    }
})
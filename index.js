require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())




const connection = require('./inc/connection')
const tables = require('./inc/tables')

const router = require('./routes/index')

router(app, express)
tables.init(connection)




app.listen(process.env.PORT || 3001, (error) => {
    if(error){
        console.log('deu erro -> ', error.message)
    }else{
        console.log(`rodando na porta ${process.env.PORT || 3001}`)
    }
})
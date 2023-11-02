const express = require('express')
const app = express()

const connection = require('./inc/connection')
const tables = require('./inc/tables')

const router = require('./routes/index')

router(app, express)
tables.init(connection)


app.listen(3000, (error) => {
    if(error){
        console.log('deu erro -> ', error.message)
    }else{
        console.log('rodando na porta 3000')
    }
})
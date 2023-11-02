const { error } = require("console")
const mysql = require("mysql")
let conn = ''
try{
    conn = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    database: "escola"
})
}catch(e){
    conn = 'erros -> ', e.message
}


module.exports = conn
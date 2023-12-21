const conexao = require('../inc/connection')

class UsersModel{
    get(){
        const sql = "SELECT * FROM users"
        return new Promise((res, rej) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log('erro na listagem -> ', error)
                }
                res(resposta)
            })
        })
    }

    logUser(rm, password){
        const sql = "SELECT * FROM users WHERE rm = ? AND password = ?"
        return new Promise((res, rej) => {
            conexao.query(sql, [rm, password], (err, resp) => {
                if(err){                    
                    rej(err)
                }
                res(resp)
            })
        }) 
    
    }

    newUser(newUser){
        const sql = `INSERT INTO users SET ?`

        return new Promise((res, rej) => {
            conexao.query(sql, newUser, (err, resposta) => {                
                if(err){
                    console.log('error -> ', err.message)
                    rej(err)
                }
                res(resposta)
            })
        })
    }
}

module.exports = new UsersModel
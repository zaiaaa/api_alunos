const conexao = require('../inc/connection')
const bcrypt = require('bcrypt')
const auth = require('./authUser')
const { json } = require('express')

class UsersModel{
    
    executarQuery(sql, parametros=""){
        return new Promise((res, rej) => {
            conexao.query(sql, parametros, (err, resp) => {
                if(err){
                    console.log('erro -> ', err.message)
                    rej(err)
                }
                res(resp)
            })
        })
    }
    
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

    async logUser(rm, password){
        const sql = "SELECT * FROM users WHERE rm = ?"
        const user = await this.executarQuery(sql, [rm])
        console.log(user)
        //console.log(user[0].password)
        
        const passwordBanco = user[0].password

        const isCorrectPassword = await bcrypt.compare(password, passwordBanco) 

        console.log(isCorrectPassword)


        if (isCorrectPassword) {
            return auth.tryAuth(user[0])
        } else {
            return 'wrong password';
        }
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

    altUser(altUser, rm){
        const sql = "UPDATE users SET ? WHERE rm = ?"

        return new Promise((res, rej) => {
            conexao.query(sql, [altUser, rm], (err, resposta) => {                
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
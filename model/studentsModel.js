const studentsController = require('../controller/studentsController')
const conexao = require('../inc/connection')

class StudentsModel{
    get(){
        const sql = "SELECT * FROM students"
        return new Promise((res, rej) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log('erro na listagem -> ', error)
                }
                res(resposta)
            })
        })
    }

    getByRm(rm){
        const sql = `SELECT * FROM students WHERE rm = ${rm}`

        return new Promise((res, rej) => {
            conexao.query(sql, rm, (error, resposta) => {
                if(error){
                    console.log('Erro -> ', error.message)
                    rej(error)
                }
                res(resposta)
            })
        })
    }

    addNewStudent(newStudent){
        const sql = "INSERT INTO students SET ?"
        return new Promise((res, rej) => {
            conexao.query(sql, newStudent, (err, resposta) => {
                if(err){
                    console.log('error -> ', err.message)
                    rej(err)
                }
                res(resposta)
            })
        })
    }

    alterStudent(newStudent, rm){
        const sql = "UPDATE students SET ? WHERE rm = ?"
        return new Promise((res, rej) =>{
            conexao.query(sql, [newStudent, rm], (err, resp) =>{
                if(err){
                    console.log('Erro ao atualizar estudante ->', err)
                    rej(err)
                }
                res(resp)
            })
        })
    }
}

module.exports = new StudentsModel



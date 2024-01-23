const conn = require('../inc/connection')

class ClassRoomModel{
    get(){
        const sql = "SELECT * FROM roomclass"
        return new Promise((res, rej) => {
            conn.query(sql, {}, (err, resp) => {
                if(err){
                    console.log('erro na listagem -> ', err)
                    rej(err)
                }
                res(resp)
            })
        })
    }
    getByName(name){
        const sql = `SELECT * FROM roomclass WHERE name LIKE ?`

        return new Promise((res, rej) => {
            conn.query(sql, [`%${name}%`], (error, resposta) => {
                if(error){
                    console.log('Erro -> ', error.message)
                    rej(error)
                }
                res(resposta)
            })
        })
    }

    getById(id){
        const sql = `SELECT * FROM roomclass WHERE id = ?`

        return new Promise((res, rej) => {
            conn.query(sql, id, (error, resposta) => {
                if(error){
                    console.log('Erro -> ', error.message)
                    rej(error)
                }
                res(resposta)
            })
        })
    }

    addNewClass(newClass){
        const sql = "INSERT INTO roomclass SET ?"
        return new Promise((res, rej) => {
            conn.query(sql, newClass, (err, resposta) => {                
                if(err){
                    console.log('error -> ', err.message)
                    rej(err)
                }
                res(resposta)
            })
        })
    }

    alterClass(newClass, id){
        const sql = "UPDATE roomclass SET ? WHERE id = ?"
        return new Promise((res, rej) =>{
            conn.query(sql, [newClass, id], (err, resp) =>{
                if(err){
                    console.log('Erro ao atualizar estudante ->', err)
                    rej(err)
                }
                res(resp)
            })
        })
    }

    deleteClass(id){
        const sql = `DELETE FROM roomclass WHERE id = ${id}`

        return new Promise((res, rej) => {
            conn.query(sql, id, (err, resp) => {
                if(err){
                    console.log('Erro ao deletar estudante ->', err)
                    rej(err)
                }
                res(resp)
            })
        })
    }
}


module.exports = new ClassRoomModel
const conn = require('../inc/connection')

class MailerModel{
    sendPasswordChange(rm){
        const sql = `SELECT * FROM users WHERE rm = ${rm}`

        return new Promise((res, rej) => {
            conn.query(sql, rm, (err, resp) => {
                if(err){
                    console.log('Erro ao deletar estudante ->', err)
                    rej(err)
                }
                res(resp)
            })
        })
    }
}


module.exports = new MailerModel
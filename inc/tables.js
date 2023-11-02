class Tabelas{
    init(conn){
        this.conn = conn
        this.createClassTable()
        this.createStudentTable()
    }

    createClassTable(){
        const sql = `
            CREATE TABLE IF NOT EXISTS roomClass(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,   
                name varchar(30),
                serie varchar(1),
                qtt_students int
            );
        `

        this.conn.query(sql, (e) => {
            if(e){
                console.log('error -> ', e.message)
                return
            }
            console.log('tabela roomClass criada com sucesso')
        })
    }

    createStudentTable(){
        const sql = `
            CREATE TABLE IF NOT EXISTS students(
                rm INT NOT NULL PRIMARY KEY,   
                name varchar(30),
                birth_date DATE,
                fk_id_class int,
                cpf varchar(11)
            );
        `
        this.conn.query(sql, (e) => {
            if(e){
                console.log('error -> ', e.message)
                return
            }
            console.log('tabela students criada com sucesso')
        })
    }
}

module.exports = new Tabelas()
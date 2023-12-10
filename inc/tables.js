class Tabelas{
    init(conn){
        this.conn = conn
        this.createClassTable()
        this.createStudentTable()
        this.createUsersTable()
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
                console.log('error -> ', e)
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
                console.log('error -> ', e)
                return
            }
            console.log('tabela students criada com sucesso')
        })
    }

    createUsersTable(){
        const sql = `
            CREATE TABLE IF NOT EXISTS users (
                rm INT PRIMARY KEY,
                email VARCHAR(150),
                password VARCHAR(40),
                FOREIGN KEY (rm) REFERENCES students(rm)
            );
        `

        this.conn.query(sql, (e) => {
            if(e){
                console.log('error -> ', e)
                return
            }
            console.log('tabela de usuarios criada com sucesso!')
        })
    }
}

module.exports = new Tabelas()
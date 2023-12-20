const jwt = require('jsonwebtoken')
require('dotenv').config();


class AuthModel{
    tryAuth(email, senha){ 
            return new Promise((res, rej) => {

                if(!(email && senha)){
                    rej("Usuário e senha não informados")
                }

                const user = {nome: process.env.NOME, email: process.env.EMAIL, pass: process.env.SENHA}
                //Futuramente pegar usuários do banco

                console.log(user.nome)

                if(!user){
                    rej("Usuário e/ou senha não não existem")
                }
                //nesse caso, deveriamos usar o bcrypt.compareSync(senhaDoBanco, user.pass)
                if(user && (senha == user.pass)){
                    const token = jwt.sign({
                        name: user.nome,
                        email 
                    },
                    process.env.TOKEN_API, 
                    )
                    res(token)
                }else{
                    rej("Email ou senha incorretos!")
                }
        
        })
    }
}


module.exports = new AuthModel
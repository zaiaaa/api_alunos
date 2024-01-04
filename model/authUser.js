const jwt = require('jsonwebtoken')
require('dotenv').config();


class AuthUserModel{
    tryAuth(user){ 
            return new Promise(async (res, rej) => {
                try{
                    console.log(user.rm)

                    if(!user){
                        rej("Usuário e/ou senha não não existem")
                    }
                    //nesse caso, deveriamos usar o bcrypt.compareSync(senhaDoBanco, user.pass)
                    if(user){
                        const token = jwt.sign({
                            rm: user.rm,
                            email: user.email 
                        },
                        process.env.TOKEN_API, 
                        {
                            expiresIn: "24h"
                        }
                        )
    
                        const headers = jwt.decode(token, process.env.TOKEN_API)
                    
                        res(headers)
                    }else{
                        rej("Email ou senha incorretos!")
                    }
                }catch(e){
                    if (e.name === 'TokenExpiredError') {
                        console.log('Token expirado');
                      } else {
                        console.error('Erro ao verificar o token:', e.message);
                      }
                }        
        })
    }
}


module.exports = new AuthUserModel
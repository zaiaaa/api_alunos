const authModel = require('../model/auth')

class AuthenticateController{
    Auth(email, senha){ 
        return authModel.tryAuth(email, senha)
    }
}


module.exports = new AuthenticateController()
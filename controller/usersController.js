const usersModel = require("../model/usersModel");

class UsersController{
    get(){
        return usersModel.get()
    }
    newUser(newUser){
        return usersModel.newUser(newUser)
    }
}

module.exports = new UsersController()
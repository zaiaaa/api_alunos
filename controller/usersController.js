const usersModel = require("../model/usersModel");

class UsersController{
    get(){
        return usersModel.get()
    }
    newUser(newUser){
        return usersModel.newUser(newUser)
    }
    logUser(rm, password){
        return usersModel.logUser(rm, password)
    }
}

module.exports = new UsersController()
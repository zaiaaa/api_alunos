const usersModel = require("../model/usersModel");

class UsersController{
    get(){
        return usersModel.get()
    }
    getByRm(rm){
        return usersModel.getByRm(rm)
    }
    newUser(newUser){
        return usersModel.newUser(newUser)
    }
    logUser(rm, password){
        return usersModel.logUser(rm, password)
    }
    altUser(altUser, rm){
        return usersModel.altUser(altUser, rm)
    }
}

module.exports = new UsersController()
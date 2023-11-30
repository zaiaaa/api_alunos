const roomModel = require('../model/classRoomModel')

class ClassController{
    get(){
        return roomModel.get()
    }
    getById(id){
        return roomModel.getById(id)
    }
    addNewClass(newClass){
        return roomModel.addNewClass(newClass)
    }
    alterClass(newClass, id){
        return roomModel.alterClass(newClass, id)
    }
    deleteClass(id){
        return roomModel.deleteClass(id)
    }
}


module.exports = new ClassController()
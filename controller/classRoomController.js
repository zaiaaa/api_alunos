const roomModel = require('../model/classRoomModel')

class ClassController{
    get(){
        return roomModel.get()
    }
    getByName(name){
        return roomModel.getByName(name)
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
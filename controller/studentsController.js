const studentsModel = require('../model/studentsModel')

class StudentsController{
    get(){
        return studentsModel.get()
    }
    getByRm(rm){
        return studentsModel.getByRm(rm)
    }
    getByRoom(RoomId){
        return studentsModel.getByRoom(RoomId)
    }
    newStudent(newStudent){
        return studentsModel.addNewStudent(newStudent)
    }
    alterStudent(newStudent, rm){
        return studentsModel.alterStudent(newStudent, rm)
    }
    deleteStudent(rm){
        return studentsModel.deleteStudent(rm)
    }
}

module.exports = new StudentsController()
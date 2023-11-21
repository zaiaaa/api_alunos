const studentsModel = require('../model/studentsModel')

class StudentsController{
    get(){
        return studentsModel.get()
    }
    getByRm(rm){
        return studentsModel.getByRm(rm)
    }
    newStudent(newStudent){
        return studentsModel.addNewStudent(newStudent)
    }
    alterStudent(newStudent, rm){
        return studentsModel.alterStudent(newStudent, rm)
    }
}

module.exports = new StudentsController()
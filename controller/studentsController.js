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
}

module.exports = new StudentsController()
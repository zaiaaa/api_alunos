const { Router } = require('express')
const router = Router()
const studentsController = require('../controller/studentsController')

const middleware = require('../middleware/auth')


router.get("/students",(req, res) => {
    const listStudents = studentsController.get()
    listStudents.then(student => res.status(200).json(student)).catch(err => res.status(400).json(err.message))
})
             
router.get("/students/:rm", (req, res) => {
    const rm = req.params.rm
    const listStudentsByRm = studentsController.getByRm(rm)
    listStudentsByRm.then(student => res.status(200).json(student)).catch(err => res.status(400).json(err.message))
})

router.get('/studentsPerRoom/:roomId', (req, res) => {
    const roomId = req.params.roomId
    const listStudentsPerRoom = studentsController.getByRoom(roomId)
    listStudentsPerRoom.then(student => res.status(200).json(student)).catch(err => res.status(400).json(err.message))
})

router.post("/students", middleware, async (req, res) =>{
    const newStudent = req.body
    
    const studentCpf = studentsController.get()
    const cpfs = await studentCpf.then(estudante => estudante)

    cpfExists = cpfs.filter(cpf => cpf.cpf === newStudent.cpf)

    if(cpfExists.length > 0){
        res.status(401).json({message: "cpf já existente"})
        return
    }else{
        const student = studentsController.newStudent(newStudent)
        student.then(generatedStudent => res.status(200).json(generatedStudent)).catch(err => res.status(400).json(err.message))
    }
})

router.put("/student/:rm", middleware,(req, res) => {
    const { rm } = req.params
    const newStudent = req.body
    const alterStudent = studentsController.alterStudent(newStudent, rm)
    alterStudent.then(alteredStudent => res.status(201).json(alteredStudent)).catch(err => res.status(400).json(err.message))
})


router.delete("/deleteStudent/:rm", middleware ,(req, res) => {
    const {rm} = req.params
    const deleteStudent = studentsController.deleteStudent(rm)
    deleteStudent.then(deletedStudent => res.status(200).json(deletedStudent)).catch(err => json(err.message))

})



module.exports = router
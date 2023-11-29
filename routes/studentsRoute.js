const { Router } = require('express')
const router = Router()
const controller = require('../controller/studentsController')

router.get("/students", (req, res) => {
    const listStudents = controller.get()
    listStudents.then(student => res.status(200).json(student)).catch(err => res.status(400).json(err.message))
})

router.get("/students/:rm", (req, res) => {
    const rm = req.params.rm
    const listStudentsByRm = controller.getByRm(rm)
    listStudentsByRm.then(student => res.status(200).json(student)).catch(err => res.status(400).json(err.message))
})

router.get('/studentsPerRoom/:roomId', (req, res) => {
    const roomId = req.params.roomId
    const listStudentsPerRoom = controller.getByRoom(roomId)
    listStudentsPerRoom.then(student => res.status(200).json(student)).catch(err => res.status(400).json(err.message))
})

router.post("/students", async (req, res) =>{
    const newStudent = req.body
    
    const studentCpf = controller.get()
    const cpfs = await studentCpf.then(estudante => estudante)

    cpfExists = cpfs.filter(cpf => cpf.cpf === newStudent.cpf)

    if(cpfExists.length > 0){
        res.status(401).json({message: "cpf já existente"})
        return
    }else{
        const student = controller.newStudent(newStudent)
        student.then(generatedStudent => res.status(200).json(generatedStudent)).catch(err => res.status(400).json(err.message))
    }
})

router.put("/student/:rm", (req, res) => {
    const { rm } = req.params
    const newStudent = req.body
    const alterStudent = controller.alterStudent(newStudent, rm)
    alterStudent.then(alteredStudent => res.status(201).json(alteredStudent)).catch(err => res.status(400).json(err.message))
})


router.delete("/deleteStudent/:rm", (req, res) => {
    const {rm} = req.params
    const deleteStudent = controller.deleteStudent(rm)
    deleteStudent.then(deletedStudent => res.status(200).json(deletedStudent)).catch(err => json(err.message))

})



module.exports = router
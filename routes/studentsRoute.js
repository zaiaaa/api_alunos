const { Router, response } = require('express')
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

router.post("/students", (req, res) =>{
    const newStudent = req.body
    const student = controller.newStudent(newStudent)
    student.then(generatedStudent => res.status(200).json(generatedStudent)).catch(err => res.status(400).json(err.message))
})

module.exports = router
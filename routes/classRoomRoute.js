const { Router } = require('express')
const classRoomController = require('../controller/classRoomController')
const router = Router()

router.get('/classRoom', (req, res) =>{
    const listClasses = classRoomController.get()
    listClasses.then(classes => res.status(200).json(classes)).catch(err => res.status(400).json(err.message))
})



router.get("/classRoom/:name", (req, res) => {
    const {name} = req.params
    const listClasses = classRoomController.getByName(name)
    listClasses.then(classes => res.status(200).json(classes)).catch(err => res.status(400).json(err.message))
})

router.get("/classRoom/id/:id", (req, res) => {
    const {id} = req.params
    const list =  classRoomController.getById(id)
    list.then(classes => res.status(200).json(classes)).catch(err => res.status(400).json(err.message))
})

router.post("/classRoom", (req, res) => {
    const newClass = req.body
    const roomClass = classRoomController.addNewClass(newClass)
    
    roomClass.then(classes => res.status(201).json(classes)).catch(err => res.status(400).json(err.message))
})

router.put("/editClassRoom/:id", (req, res) => {
    const newClass = req.body
    const {id} = req.params

    const listClass = classRoomController.alterClass(newClass, id)

    listClass.then(classes => res.status(201).json(classes)).catch(err => res.status(400).json(err.message))
})

router.delete("/deleteClassRoom/:id", (req, res) => {
    const {id} = req.params

    const listClass = classRoomController.deleteClass(id)

    listClass.then(classes => res.status(200).json(classes)).catch(err => res.status(400).json(err.message))
})

module.exports = router

//TODO proteger as todas as rotas, exceto as de get. 
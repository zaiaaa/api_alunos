const { Router } = require('express')
const usersController = require('../controller/usersController')
const router = Router()
const middleware = require('../middleware/auth')


const bcrypt = require('bcrypt')
const saltRound = 10
//a

router.get('/users', middleware ,(req, res) => {
    const listUsers = usersController.get()
    listUsers.then(users => res.status(200).json(users)).catch(err => res.status(400).json(err.message))
})


router.get('/logUser', middleware, async (req, res) => {
    const rm = req.query.rm
    const senha = req.query.password


    const listUsers = usersController.logUser(rm, senha)

    listUsers.then(users => res.status(200).json(users)).catch(err => res.status(400).json(err.message))
})

router.post('/users', async (req, res) => {
    const newUser = req.body

    const {password} = newUser
    console.log(password)

    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);

    newUser.password = hash

    const users = usersController.newUser(newUser)

    users.then(users => res.status(201).json(users)).catch(err => res.status(400).json(err.message))
})

router.put('/users/alt/:rm', async (req, res) => {
    const altUser = req.body
    const {rm} = req.params

    const {password} = altUser

    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);

    altUser.password = hash

    usersController.altUser(altUser, rm).then(users => res.status(201).json(users)).catch(err => res.status(400).json(err.message))
})


module.exports = router
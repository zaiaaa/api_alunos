const authenticate = require("../controller/auth")
const { Router } = require('express')
const router = Router();

router.post('/login', (req, res) => {
    const {email, senha} = req.body;
    const auth = authenticate.Auth(email, senha)
    auth.then(login => res.status(201).json(login)).catch(err => res.status(400).json(err))
})

module.exports = router
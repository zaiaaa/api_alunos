const { Router } = require('express')
const mailerController = require('../controller/mailer')
const router = Router()
const mail = require('../services/mailer')

router.get('/changePass/:rm', async (req, res) => {
    const {rm} = req.params
    
    const user = await mailerController.sendPasswordEmail(rm)

    console.log(user[0])

    const configEmail = {
        from: "gustavozaia75@gmail.com",
        to: user[0].email,
        subject: "Alteração de senha",
        html: `
        <h1>Siga este botão para alterar a sua senha</h1>

        <a href="http://localhost:3000/trocadesenha/${user[0].rm}"><button>kkkkk vsf</button></a>
        `
    }
    
    mail.sendMail(configEmail)

    res.send("email enviado!")
})

module.exports = router

//TODO proteger as todas as rotas, exceto as de get. 
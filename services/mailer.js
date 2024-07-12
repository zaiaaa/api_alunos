const nodemailer = require('nodemailer')


const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user: "gustavozaia75@gmail.com",
        pass: "qhkt gnsg ippc plcs"
    },
    tls: "SSLv3"
})

// const configEmail = {
//     from: "gustavozaia75@gmail.com",
//     to: "zaiaeliete7@gmail.com",
//     subject: "Testando EMAILS com nodemailer",
//     html: "<p>kkkkkkkkkkkkk teste legal</p>"
// }

async function sendMail(configEmail){
    try{
        await smtp.sendMail(configEmail)
    }catch(err){
        return err
    }
}

module.exports = {sendMail}
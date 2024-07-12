const mailModel = require('../model/mailer')

class ClassController{
    sendPasswordEmail(rm){
        return mailModel.sendPasswordChange(rm)
    }
}


module.exports = new ClassController()
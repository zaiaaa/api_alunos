const studentsRoute = require('./studentsRoute')


module.exports = (app, express) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(studentsRoute)
} 
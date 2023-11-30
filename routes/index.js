const studentsRoute = require('./studentsRoute')
const roomRoutes = require('./classRoomRoute')

module.exports = (app, express) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(studentsRoute)
    app.use(roomRoutes)
} 
const studentsRoute = require('./studentsRoute')
const roomRoutes = require('./classRoomRoute')
const authRoute = require('./auth')
const usersRoute = require('./usersRoute')
const {router} = require('./payment')

module.exports = (app, express) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(studentsRoute)
    app.use(roomRoutes)
    app.use(authRoute)
    app.use(usersRoute)
    app.use(router)
} 
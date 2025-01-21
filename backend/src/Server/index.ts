import express from 'express'
import { db} from '../Configs/db.config'
const userRouter = require('../Routes/user.route')
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use("/api/v1/users", userRouter)

//db connection then server connection
db.then(() => {
    app.listen(8080, () => console.log('Server is listening on port 8080'))
})
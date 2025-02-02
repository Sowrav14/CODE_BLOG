import express from 'express'
import { db} from '../Configs/db.config'
const userRouter = require('../Routes/user.route')
const authRouter = require('../Routes/auth.route')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors())

//routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/auth", authRouter);

//db connection then server connection
db.then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
})
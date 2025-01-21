//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

//details from the env
const dbName = process.env.DB_NAME;
const dbString = process.env.DATABASE_URL || "mongodb://localhost:27017/CodeBlog"

//db connection
export const db = mongoose.connect(dbString)
.then(res => {
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
    
}).catch(err => {
    console.log("Error Connecting Database");
    console.log(err)
})
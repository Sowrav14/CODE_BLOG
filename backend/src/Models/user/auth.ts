import { model, models, Schema } from "mongoose";
import { Userauth } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userAuthschema = new Schema<Userauth> (
    {
        id : {
            type : String,
        },
        username : {
            type : String,
            required : true
        },
        email : {
            type : String, 
            required : true
        },
        password : {
            type : String,
            required : true
        }
    }
)

const UserAuth = models['UserAuth'] || model<Userauth>('UserAuth', userAuthschema)

export { UserAuth }
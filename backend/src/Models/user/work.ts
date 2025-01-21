import { model, models, Schema } from "mongoose";
import { Userwork } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userWorkschema = new Schema<Userwork> (
    {
        uid : {
            type : String,
            required : true
        },
        titlle : {
            type : String,
            required : true
        },
        role : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        date : {
            type : String,
            required : true
        },
    }
)

export const UserWork = models['UserWork'] || model<Userwork>('UserWork', userWorkschema)
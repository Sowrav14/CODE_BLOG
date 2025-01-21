import { model, models, Schema } from "mongoose";
import { Userread } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userReadschema = new Schema<Userread> (
    {
        uid : {
            type : String,
            required : true
        },
        bid : {
            type : String,
            required : true
        }
    }
)

export const UserRead = models['UserRead'] || model<Userread>('UserRead', userReadschema)
import { model, models, Schema } from "mongoose";
import { Userdisplay } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userDisplayschema = new Schema<Userdisplay> (
    {
        uid : {
            type : String,
            required : true
        },
        followers : {
            type : Number,
            required : true
        },
        likes : {
            type : Number,
            required : true
        },
        blogCount : {
            type : Number,
            required : true
        }
    }
)

export const UserDisplay = models['UserDisplay'] || model<Userdisplay>('UserDisplay', userDisplayschema)
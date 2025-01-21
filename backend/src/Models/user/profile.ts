import { model, models, Schema } from "mongoose";
import { Userprofile } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userProfileschema = new Schema<Userprofile> (
    {
        uid : {
            type : String,
            required : true
        },
        username : {
            type : String,
            required : true
        },
        organization : {
            type : String,
        },
        tag : {
            type : String,
        },
        intro : {
            type : String,
        },
        imageUrl : {
            type : String,
        }
    }
)

export const UserProfile = models['UserProfile'] || model<Userprofile>('UserProfile', userProfileschema)
import { model, models, Schema } from "mongoose";
import { Userabout } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userAboutschema = new Schema<Userabout> (
    {
        uid : {
            type : String,
            required : true
        },
        phone : {
            type : String,
        },
        email : {
            type : String,
        },
        linkedin : {
            type : String,
        },
        github : {
            type : String,
        },
        address : {
            type : String,
        },
        dob : {
            type : String,
        },
        gender : {
            type : String,
        }
    }
)

const UserAbout = models['UserAbout'] || model<Userabout>('UserAbout', userAboutschema)
export { UserAbout }
import { model, models, Schema } from "mongoose";
import { Userfavourite } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userFavouriteschema = new Schema<Userfavourite> (
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

export const UserFavourite = models['UserFavourite'] || model<Userfavourite>('UserFavourite', userFavouriteschema)
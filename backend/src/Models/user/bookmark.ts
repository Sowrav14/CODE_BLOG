import { model, models, Schema } from "mongoose";
import { Userbookmark } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userBookmarkschema = new Schema<Userbookmark> (
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

export const UserBookmark = models['UserBookmark'] || model<Userbookmark>('UserBookmark', userBookmarkschema)
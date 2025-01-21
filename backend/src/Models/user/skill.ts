import { model, models, Schema } from "mongoose";
import { Userskill } from "../../Libs/user";

const mongoose = require("mongoose");

/* Schema for the Item document */
const userSkillschema = new Schema<Userskill> (
    {
        uid : {
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        }
    }
)

export const UserSkill = models['UserSkill'] || model<Userskill>('UserSkill', userSkillschema)
import { Userabout, Userauth, Userdisplay, Userprofile } from "../Libs/user";
import { UserAbout } from "../Models/user/about";
import { UserAuth } from "../Models/user/auth";
import { UserDisplay } from "../Models/user/display";
import { UserProfile } from "../Models/user/profile";


export class userServices{
    // login
    async logIn(data : Userauth){
        const user = await UserAuth.findOne(data);
        if(user){
            return true;
        } else{
            return false;
        }
    }

    async signUp(data : Userauth){
        try{
            const existing = await UserAuth.findOne(data);
            if(existing){
                return null;
            }
            const user = await UserAuth.create(data);
            return user;
        } catch(error){
            console.log(error)
            console.log("Error in creating instance in Auth")
        }
    }

    async createAbout(user : Userabout){
        try{
            const about = await UserAbout.create(user);
            return true
        } catch(error){
            console.log("Error Creating instances in About")
            return false
        }
    }

    async createDisplay(user : Userdisplay){
        try {
            const display = await UserDisplay.create(user);
            return true;
        } catch(error){
            console.log("Error Creating instances in Display")
            return false
        }
    }

    async createProfile(user : Userprofile){
        try {
            const profile = await UserProfile.create(user);
            return true
        } catch(error){
            console.log("Error Creating instances in Profile")
            return false
        }
    }
}

export const userServe = new userServices();
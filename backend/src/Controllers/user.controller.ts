import { Request, Response } from "express";
import { userServe } from "../Services/user.services";

export class userController{
    logIn = async(req:Request, res:Response) => {
        const id = "0dfka;";
        const username = req.body.username;
        const password = req.body.password;

        const isValid = await userServe.logIn({username, password})
        if(isValid){
            res.status(201).json("User Found");
        } else{
            res.status(404).json("Error");
        }
    }

    singUp = async(req:Request, res:Response) => {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const user = await userServe.signUp({username, email, password});
        if(user){
            const uid = user._id.toString();
            const likes = 0;
            const followers = 0;
            const blogCount = 0;
            try{
                await userServe.createAbout({uid});
                await userServe.createDisplay({uid, followers, likes, blogCount})
                await userServe.createProfile({uid, username})
                res.json(200).json({
                    "success" : true
                })
            } catch(error){
                res.status(401).json({
                    "success" : "false"
                })
            }
        } else{
            res.status(401).json({
                "success" : "false"
            })
        }
    }
}

export const userCont = new userController();
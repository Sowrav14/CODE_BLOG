import { Request, Response } from "express";

const express = require("express");
const authRouter = express.Router();
const cors = require("cors")

const clientId = "Iv23lioh18FlIMaErCU3"
const clientSecret = "7961ca365181be2eabfa673dd5bd68ef2db8a021"



// Routes here...
authRouter.get('/', (req : Request, res : Response) => {
    res.json("hi there");
})


// get user access token by using the one time code by github...
authRouter.get("/getAccessToken", async(req:Request, res:Response) => {
    const codeToken = req.query.code as string;
    console.log(codeToken);
    const params = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: codeToken
    });
    try{
        const response = await fetch("https://github.com/login/oauth/access_token", {
            method : "POST",
            headers : {
                "Accept" : "application/json",
            },
            body : params
        })
        const data = await response.json();
        console.log(data);
        res.json(data);
    } catch(error){
        res.status(500).json({"error" : "something went wrong"})
    }
})

// get user data by using the access token...
authRouter.get('/getUserData', async (req:Request, res:Response) => {
    const bearer = req.get("Authorization") as string;
    try{
        const response = await fetch("https://api.github.com/user", {
            method : "GET",
            headers : {
                "Authorization" : bearer
            }
        })
        const data = await response.json();
        const username = data.name;
        const github = data.login;
        res.status(200).json({username, github});
    } catch(error){
        res.status(500).json("Some error Occured");
    }
})



module.exports = authRouter;
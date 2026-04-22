const express = require("express");
const path = require("path");

const rootDir = require("../utils/pathUtils.js");
const Route = express.Router();


Route.get("/front",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","Frontpage.html"))
});


Route.get("/login",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","Loginpage.html"));
});
Route.post("/login",(req,res,next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir,"views","Successful.html"));
});


Route.get("/Signup",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","Signup.html"));
});
Route.post("/Signup",(req,res,next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir,"views","Signupsuccess.html"));
});


exports.Route = Route;
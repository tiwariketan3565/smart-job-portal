const express = require("express");
const path = require("path");

const app = express();

const rootDir = require("./utils/pathUtils");
const {Route} = require("./routes/LoginOrSignup");
const {homeRoute} = require("./routes/homeRouter");
app.use(express.static(path.join(rootDir,"public")));

// app.use((req,res,next) => {
//     console.log(req.body);
//     next;
// });

app.use(express.urlencoded());
app.use(homeRoute);
app.use(Route);

app.listen(8000,(err) => {
    console.log("SERVER STARTED");
});
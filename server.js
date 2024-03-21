"use strict"

const express = require("express");
const app = express(); //Starta applikation
const port = 3000;

app.set("view engine", "ejs"); //viewengine(vyer)
app.use(express.static("public"));

//Routing- En för varje webbsida
app.get("/", (req, res) => {
    res.render("index", {
        fullName: "Hanin Farhan är bäst"
    });
});

app.get("/member", (req, res) => {
    const memberList = [
        {
            fullName: "Hanin Farhan",
            email: "haninfarhan96@gmail.com"
        },
        {
            fullName: "Mattias Arendt",
            email: "mattias.arendt@hotmail.com"
        }
    ];
    res.render("member", {memberList});
});

app.get("/about", (req, res) => {
    res.render("about");
});

//Starta applikation
app.listen(port, () => {
    console.log("server started on port:" + port);
});
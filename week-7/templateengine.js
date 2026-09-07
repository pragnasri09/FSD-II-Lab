const express=require("express");
const app=express();
app.set("view engine","ejs");
app.get("/",(req,res)=> {
    const student = {
        name : "Pragna",
        age : 19,
        branch : "AIML"
    };
    res.render("index",{ student });
});
app.listen(3000,()=> {
    console.log("Server running on port 3000");
});
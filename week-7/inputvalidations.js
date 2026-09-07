const express=require("express");
const app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true}));
app.get("/",(req,res)=>{
    res.render("form");
});
app.post("/submit",(req,res)=>{
    const { name,email,age}=req.body;
    if(!name || name.trim()==="")
    {
        return res.send("Name is required");
    }
    if(!email || !email.includes("@"))
    {
        return res.send("Invalid email");
    }
    if(!age || age<18)
    {
        return res.send("Age must be 18 or above");
    }
    res.send("Form submitted successfully");
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
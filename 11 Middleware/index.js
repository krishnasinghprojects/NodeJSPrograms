const express=require("express");
const users=require("./data.json");
const app=express();
const PORT=8000

app.use((req,res,next)=>{
    console.log("Middleware 1")
    next()
})
app.use((req,res,next)=>{
    console.log("Middleware 2")
    res.end("MIDDLEWARE BLOCKED THIS REQUEST")
})
app.get("/api/users",(req,res)=>{
    return res.json(users);
})





app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`))
//ExpressJS is a web framework which can handle web requests on a server.
const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    return res.send("Home From Express Server")
})
app.get("/about",(req,res)=>{
    return res.send("About From Express Server"+`Hello ${req.query.name}`)
})

app.listen(8008,()=> console.log("SERVER STARTED AT http://localhost:8008/"))


//Version

//^0.0.0

//^ - Compatible With Version till 1st Version Same (i.e Breaking Version)
//~ - Compatible With Version till 2nd Version Same (i.e. Similar Version)
//latest - Picks Up The Latest Version 
//1st - Major Release (Code Might Break) [Major/Breaking Update]
//2nd - Recommended Bug or Security Fix (Compulsory)
//3rd - Minor Fixes (Optional Updates)

//npm install library@version - Method To Install A Specific Version.
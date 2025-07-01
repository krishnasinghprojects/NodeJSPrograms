const express=require("express");
const users=require("./data.json");

const fs=require("fs");

const app=express();
const PORT=8000

app.use(express.urlencoded({extended:false})) //Middleware

//ROUTES

//To Be Used By Front-End To Render
app.get("/api/users",(req,res)=>{
    return res.json(users);
})

//For Dynamic Path Parameter
app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id)
    return res.json(user);
})

app.post("/api/users",(req,res)=>{
    const body=req.body;
    console.log(body)
    users.push({id:(users.length+1),...body})
    fs.writeFile("./data.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"DONE",id:(users.length)});
    })
})

app.patch("/api/users/:id",(req,res)=>{
    const body=req.body;
    const id=Number(req.params.id);

    users[id-1]={id:id,...body}
    fs.writeFile("./data.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"DONE",details:users[id-1]});
    })
})

app.delete("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    users.splice(id-1,1);
     fs.writeFile("./data.json",JSON.stringify(users),(err,data)=>{
       return res.json({status:"DONE",userDetails:users});
    })
})



//Server Rendering The HTML Itself
/*
app.get("/users",(req,res)=>{
    const htmlData=`
    <h1>USERS</h1>
    <div>
        ${users.map((user)=>`<h3>${user.name}</h3>`).join('')}
    </div>`
    return res.send(htmlData);
})
*/

app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`))
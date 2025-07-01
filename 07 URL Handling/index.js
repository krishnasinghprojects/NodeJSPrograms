const http=require("http");
const fs=require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    console.log("New Request Recieved\nRandom Number : ",Math.random());
    const detail=`New Request Recieved\nRandom Number : ${Math.random()}\nRecieved At Route : ${req.url}\n\n`
    const myUrl=url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile("Log.txt",detail,(err)=>{
        if (err) {
            console.error("Unable To Log:", err);
            res.end(`Hello From Server\nError logging request. Random Number : ${Math.random()}\n`);
        } else {
            console.log("Request Logged to Log.txt");
            switch(myUrl.pathname){
                case '/':
                    res.end(`Hello From Server HOMEPAGE\nRandom Number : ${Math.random()}`);
                    break;
                case '/about':
                    const queryParameter= myUrl.query.name
                    res.end(`Hello From Server ABOUT\nHello ${queryParameter}`);
                    break;
                default:
                    res.end(`404 NOT FOUND\nRandom Number : ${Math.random()}`);
                    break;
            }
            
        }
    })
    

});
myServer.listen(8008,()=>{console.log("Server Started ! at http://localhost:8008/")});
const http=require("http");
const fs=require("fs");
const myServer = http.createServer((req,res)=>{
    console.log("New Request Recieved\nRandom Number : ",Math.random());
    const detail=`New Request Recieved\nRandom Number : ${Math.random()}\nRecieved At Route : ${req.url}\nRequest was ${req.method}\n\n`
    fs.appendFile("Log.txt",detail,(err)=>{
        if (err) {
            console.error("Unable To Log:", err);
            res.end(`Hello From Server\nError logging request. Random Number : ${Math.random()}`);
        } else {
            console.log("Request Logged to Log.txt");
            switch(req.url){
                case '/':
                    res.end(`Hello From Server HOMEPAGE\nRandom Number : ${Math.random()}`);
                    break;
                case '/about':
                    res.end(`Hello From Server ABOUT\nRandom Number : ${Math.random()}`);
                    break;
                case '/signup':
                    if(req.method==="GET") res.end("SIGNUP FORM");
                    else{res.end("DONE")}
                    break;
                default:
                    res.end(`404 NOT FOUND\nRandom Number : ${Math.random()}`);
                    break;
            }
            
        }
    })
    

});
myServer.listen(8008,()=>{console.log("Server Started !")});
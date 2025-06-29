const fs=require('fs');
let text1="Hello I Am Krishna Singh Synchronous"
let text2="Hello I Am Krishna Singh Asynchronous"

fs.writeFileSync("text1.txt",text1); //Writes Synchronously Blocking Thread Until Done
fs.writeFile("text2.txt",text2, (err)=>{(err)?console.log("Error Occured"):console.log("No Error Occured")}); //Writes File Asynchronously Not Blocking The Thread


//Same Working Of Sync And Async For Reading File.
let data = fs.readFileSync("text1.txt","utf-8");
console.log(data)

//Same Working Of Sync And Async For Appending Data To A File.
fs.appendFileSync("text3.txt","Entry 1 Name 1\n") //Appends Text To A File And Not Rewrite It

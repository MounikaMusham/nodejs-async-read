//Blocking code execution

const fs = require("fs");
const textIN = fs.readFileSync("courses.txt","utf-8");
console.log(textIN);

//non-blocking code execution

fs.readFile("courses.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log('Reading File');
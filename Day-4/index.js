// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Welcome students");
// });
// app.get("/hi",(req,res)=>{
//     res.send("hello");
// });
// app.listen(3000,()=>{
//     console.log("server listening on port 3000")
// });



// const http=require('http');
// const data={age:5};
// const server=http.createServer((req,res)=>{
//   console.log(req.url)
//   console.log('server started')
//   res.setHeader('Dummy', 'DummyValue')
//   res.setHeader('Content-Type', 'text/html')
//   res.end("hello")
// })
// server.listen(5050)

const http=require('http');

const books=[{id:1, title},{},{}]
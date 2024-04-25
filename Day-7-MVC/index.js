import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"


const app=express()
dotenv.config()
app.get("/", (req, res)=>{
    res.send("working")
})
mongoose.connect(process.env.MONGODB_URL)
app.listen(3000, () => {
    console.log("server is listening on port 3000");
  });
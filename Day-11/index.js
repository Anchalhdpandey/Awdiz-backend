import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserSchema from "./models/user.schema.js";

const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Working..");
});

app.get("/filter-users", async (req, res) => {
  try {
    // const { age } = req.body;
    // // const users = await UserSchema.find();
    // const users= await UserSchema.find({name:"anchal", email:"anchal@gmail.com"})
    // const users=await UserSchema.find({age:22});
    // const users= await UserSchema.find({age:{$eq:40}});
    // const users= await UserSchema.find({age:{$ne:40}});
    // const users= await UserSchema.find({age:{$gt:40}});
    // const users= await UserSchema.find({age:{$gte:40}});
    // const users= await UserSchema.find({age:{$lt:40}});
    // const users= await UserSchema.find({age:{$lte:40}});
    // const users= await UserSchema.find({age:{$in:[20,40]}});
    // const users= await UserSchema.find({age:{$nin:[20,40]}});
    // const users = await UserSchema.find({ contact: { $exists: true } });
    // const users = await UserSchema.find ({
    //        $and: [{ age: { $eq: 22 } },{ name:{ $eq:"anchal"} }]
    //     });
    const users = await UserSchema.find ({
             $or: [{ age: { $eq: 22 } },{ name:{ $eq:"anchal"} }]
          });
    // const users = await UserSchema.find ({
    //          $not: [{ age: { $eq: 40 } },{ name:{ $eq:"virat"} }]
    //       });
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB connected.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserSchema from "./modals/user.schema.js";
const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("working..");
});

app.post("/register", async (req, res) => { // Use async function to be able to use await
  try {
    const { name, email, password, age } = req.body;
    if (!name || !email || !password || !age) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    } else {
      const user = new UserSchema({
        name: name,
        email: email,
        password: password,
        age: age,
      });
      await user.save(); // Save the user to the database
      console.log(user, "user");
      return res.status(201).json({ success: true, message: "User registered successfully." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("connected to mongodb");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

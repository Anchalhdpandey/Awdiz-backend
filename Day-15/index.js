import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductSchema from "./schemas/product.schema.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import AllRoutes from "./routes/index.js";


const app = express();
var corsOptions = {
  origin: ["http://localhost:3000", "https://myntra.com"],
  credentials: true,
};
app.use(cors(corsOptions));
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Working...");
});

app.use("/api/v1", AllRoutes);
// app.post("/api/v1/user/register", register);

app.post("/unwind-projecting", async (req, res) => {
  try {
    const aggregation = [
      { $unwind: "$tags" },
      { $project: { name: 1, price: 1 } },
    ];
    const filteredProducts = await ProductSchema.aggregate(aggregation);
    console.log(filteredProducts, "filterdProducts");
    res.send(true);
  } catch (error) {
    return res.json({ success: false, error });
  }
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("DB connected");
});
app.listen(3001, () => {
  console.log("Server is listening on port 3001.");
});

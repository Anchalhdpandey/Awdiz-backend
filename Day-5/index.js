import express from "express";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("woking good morning..");
});
app.post("/register", (req, res) => {
  try {
    console.log(req.body.name, "request body");
    const { name, email, password, confirmPassword } = req.body;
    // console.log(name, email, password, confirmPassword, "name");
    if (!name || !email || !password || !confirmPassword) {
      res.send("All fields are required.");
    }
    if (password !== confirmPassword) {
      res.send("Password and confirmpassword not matched.");
    }
    res.send("Registration Sucessfull!!!");
  } catch (error) {
    res.send(error);
  }
});
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

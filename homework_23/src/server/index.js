const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://olegdrobinakpi:iGOtzHKN9OfpwPgS@cluster0.zutu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connect = mongoose.connect(dbUrl);
connect.then(() => console.log("Connected!"));

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Server started in port 8080");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello!");
});

app.get("/todos", (req, res) => {
  res.send({ status: "Hello" });
});

app.post("/todos", (req, res) => {
  res.send({ status: req.body });
});

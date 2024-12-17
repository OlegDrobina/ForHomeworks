const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://olegdrobinakpi:iGOtzHKN9OfpwPgS@cluster0.zutu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connect = mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Connection error:", err));
const ToDoModel = require("./ToDoModel");

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Server started in port 8080");
});

app.get("/todos", (req, res) => {
  ToDoModel.find().then((response) => res.send(response));
});

app.post("/todos", (req, res) => {
  const toDoItem = new ToDoModel(req.body);
  toDoItem.save().then((response) => res.send(response));
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  ToDoModel.updateOne({ _id: id }, req.body)
    .then(() => ToDoModel.findById(id))
    .then((response) => res.status(200).send(response))
    .catch((excpetion) => res.status(500).send(excpetion));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  ToDoModel.deleteOne({ _id: id }).then((response) => {
    if (response.deleteCount === 0) {
      res.status(404).send({ message: "Record doesn't exist" });
    } else {
      res.status(200).send(response);
    }
  });
});

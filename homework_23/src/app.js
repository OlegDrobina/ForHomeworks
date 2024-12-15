const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("App listens on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

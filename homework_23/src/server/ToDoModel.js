const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const TodoSchema = Schema({
  id: {
    type: String,
    require: false,
  },
  text: {
    type: String,
    require: true,
  },
  checked: {
    type: Boolean,
    require: true,
  },
});

module.exports = model("Todos", TodoSchema);

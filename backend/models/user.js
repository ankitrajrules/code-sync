const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  roomId: String,
  status: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
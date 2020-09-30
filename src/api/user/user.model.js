const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  name: { type: String },
  photoURL: { type: String },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// userSchema.method.login = () => {
//   console.log("sadsadsa");
// };

const User = mongoose.model("User", userSchema);

module.exports = User;

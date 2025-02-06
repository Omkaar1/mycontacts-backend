const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add user email"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add user password"],
    },

    //   phone: {
    //     type: String,
    //     require: [true, "Please add the phone number"],
    //   },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
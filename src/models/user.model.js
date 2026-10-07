import mongoose from "mongoose";

const userSchma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sdt: {
    type: String,
    defaut: "",
  },
  elo: {
    type: Number,
    default: 1000,
  },
  gender: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model("User", userSchma, "users");

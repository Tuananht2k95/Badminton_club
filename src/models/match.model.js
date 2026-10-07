import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  teamA: {
    type: Array,
    required: true,
  },
  teamB: {
    type: Array,
    required: true,
  },
  whoWin: {
    type: String,
  },
});

export const Match = mongoose.model("Match", matchSchema, "match");

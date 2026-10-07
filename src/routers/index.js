import express from "express";
import userRouter from "./user.router.js";
import matchRouter from "./match.router.js";

const router = express.Router();

router.get("", (req, res) => {
  res.json("Toi ten la ");
});
router.use("/user", userRouter);
router.use("/match", matchRouter);

export default router;

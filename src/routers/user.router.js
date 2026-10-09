import express from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", (req, res) => {
  res.json("test user");
});
userRouter.post("/", userController.store);
userRouter.post("/resetElo", userController.resetElo);
userRouter.get("/getAll", userController.getAllName);

export default userRouter;

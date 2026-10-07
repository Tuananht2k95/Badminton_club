import express from "express";
import MatchController from "../controllers/match.controller.js";

const matchRouter = express.Router();
const matchController = new MatchController();

matchRouter.post("/", matchController.store);
matchRouter.post("/resetElo", matchController.resetElo);

export default matchRouter;

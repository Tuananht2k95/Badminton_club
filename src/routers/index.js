import express from "express";

const router = express.Router();

router.get("", (req, res) => {
  res.json("Toi ten la ");
});

export default router;

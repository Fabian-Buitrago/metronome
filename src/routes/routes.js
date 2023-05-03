import { Router } from "express";
import { getSongList, addSong } from "../controllers/songsController.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/songs", getSongList);
router.post("/songs", addSong);

export default router;

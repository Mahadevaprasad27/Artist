import express from "express";
import { createArtist, getAllArtists, getOneArtist, updateArtist, deleteArtist } from "../controllers/artistController.js";

const router = express.Router();

router.post("/create", createArtist);
router.get("/getAll", getAllArtists);
router.get("/getOne/:id", getOneArtist);   // Added parameter :id
router.put("/update/:id", updateArtist);   // Changed to put method and added parameter :id
router.delete("/delete/:id", deleteArtist); // Changed to delete method and added parameter :id

export default router;

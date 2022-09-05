import express from "express";

// import db and models
import db from "../config/database.js";
import Gig from "../models/Gig.js";

const router = express.Router();

// Gigs Routes
router.get("/", async (req, res) => {
  try {
    // Query All gigs
    const gigs = await Gig.findAll();
    console.log(gigs);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;

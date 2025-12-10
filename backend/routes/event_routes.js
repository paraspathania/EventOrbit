import express from "express";
import { getAllEvents } from "../controllers/event_controller.js";

const router = express.Router();

// Public route (no auth needed for browsing)
router.get("/", getAllEvents);

export default router;

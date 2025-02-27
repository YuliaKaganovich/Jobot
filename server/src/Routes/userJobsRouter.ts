import express from "express";
import { getSavedJobsByUserID, removeSavedJob } from "../Controllers/job/getSavedJobsByUserID";
import { authMiddleware } from "../utils/authMiddleware";

const router = express.Router();

// Get saved jobs for the authenticated user
router.get("/saved-jobs", authMiddleware, getSavedJobsByUserID);

// Delete a saved job
router.delete("/saved-jobs/:jobId", authMiddleware, removeSavedJob);

export default router;
import express from "express";
const router = express.Router();

// Services
import servicesRouter from "./services.js";
router.use("/", servicesRouter)

// Party
import partyRouter from "./parties.js";
router.use("/", partyRouter)

export default router
import express from "express";
import handler from "../controllers/hello.controller";

const router = express.Router();

router.route("/").post(handler);

export default router;
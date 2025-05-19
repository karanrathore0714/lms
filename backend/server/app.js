import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "../server/database/db.js";
import userRoute from "../server/routes/user.route.js";
import courseRoute from "../server/routes/course.route.js";
import mediaRoute from "../server/routes/media.route.js";
import purchaseRoute from "../server/routes/purchaseCourse.route.js";
import courseProgressRoute from "../server/routes/courseProgress.route.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

// app.use(cors({
//     origin: "http://localhost:5173", // change to prod origin for deployment
//     credentials: true
// }));

app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

app.get("/", (req, res) => {
    res.send("Hi from Express on Vercel");
});

export default app;
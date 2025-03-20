import express from "express";
import { contactRouter } from "./routes/contactRouter.js";
import { reviewsRouter } from "./routes/reviewsRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const PORT = globalThis.process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Express Backend Service for LRS")
})
app.use("/api/contact", contactRouter);
app.use("/api/reviews", reviewsRouter);

// Error Middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.send({ error: "Internal Server Error " + err.message });
})

app.listen(PORT, () => {
    console.log("Express server listening on port " + `http://localhost:${PORT}`);
});
import express from "express";
import { contactRouter } from "./routes/contactRouter.js";
import { reviewsRouter } from "./routes/reviewsRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

const PORT = globalThis.process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json);
app.use("/contact", contactRouter);
app.use("/reviews", reviewsRouter);

// Error Middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error " + err.message);
})

app.listen(PORT, () => {
    console.log("Express server listening on port " + `http://localhost:${PORT}`);
});
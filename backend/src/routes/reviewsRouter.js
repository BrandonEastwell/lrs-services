import getAllReviews from "../controllers/reviewsController.js";
import express from "express";

const reviewsRouter = express.Router();

reviewsRouter.get("/", getAllReviews);

export { reviewsRouter }



import express from "express";
import {sendEmail, validated} from "../controllers/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/", ...validated, sendEmail)

export { contactRouter }
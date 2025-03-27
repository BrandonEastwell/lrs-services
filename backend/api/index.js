// api/index.js
import {sendEmail, validated} from "../controllers/contactController.js";
import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contact', ...validated, sendEmail);
app.get('/', (req, res) => {
    res.send('lrs backend services running...');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.send({ error: "Internal Server Error " + err.message });
})

export default app
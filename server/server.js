import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dataRoutes from "./routes/data.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

app.use("/data", dataRoutes);

const DB_URL = process.env.DB_URL;
const port = process.env.port || 3000;
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      app.listen(port, () => {
        `http://localhost:${port}`;
      });
    } else {
      console.log(err);
    }
  }
);

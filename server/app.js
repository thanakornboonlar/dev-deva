import express from "express";
import dotenv from "dotenv";
import pool from "./configs/db.js";
import assetRouter from "./routes/assetRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;

app.get("/", (req, res) => res.send("Hello World!"));

//Connect to elephantSQL
const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connect to Postgres");
  } catch (err) {
    console.log(err);
  }
};

//Route asset
app.use("/asset", assetRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server listening on port ${PORT}!`);
});

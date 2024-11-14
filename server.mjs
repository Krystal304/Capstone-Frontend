import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./db/conn.mjs";

//import database

//import routes

//seed route

//setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//db collection
connectDB();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({extended: true}));
//create item in db

//listener
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
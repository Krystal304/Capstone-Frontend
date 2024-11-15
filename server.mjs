import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./db/conn.mjs";
import QuestionSchema from "./models/Question.mjs";


//import database

//import routes/test route

  
  

//seed route

//setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//db collection
// connectDB();
// async function question(req, res) {
//     try {}
//     category: "General Knowledge",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the capital of France?",
//     correct_answer: "Paris",
//     incorrect_answers: ["Berlin", "London", "Madrid"]
// };
 
// const existingQuestion = await db.collection('questions').findOne(question);

// if (existingQuestion) {
//     console.log('Question already exists in the database.');
// } else {
//     await db.collection('questions').insertOne(question);
//     console.log('Question added to the database.');
// }


//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({extended: true}));
//create item in db

//listener
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
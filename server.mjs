import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import connectDB from "./db/conn.mjs";
import Question from './models/question.mjs'
import triviaRoutes from "./routes/TriviaRoutes.mjs";  
import cors from "cors";
import axios from "axios";




//setup
const app = express();



//enable CORS
app.use(cors());


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({extended: true}));


dotenv.config();

let PORT = process.env.PORT || 3001;

//db collection
connectDB();

let questions = [
    { id: 1, question: 'What is the capital of France?', answers: [{ text: 'Paris', correct: true }, { text: 'London', correct: false }, { text: 'Berlin', correct: false }], correctAnswer: 'Paris' },];


app.use('/', triviaRoutes);






//seed route for data folder
//create item in db

//listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
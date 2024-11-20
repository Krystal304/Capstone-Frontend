import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import connectDB from "./db/conn.mjs";
import Question from './models/question.mjs'
import triviaRoutes from "./routes/TriviaRoutes.mjs";  
import cors from "cors";




//setup
const app = express();



//enable CORS
app.use(cors());


app.use(express.json());



dotenv.config();

let PORT = process.env.PORT || 3001;

//db collection
connectDB();

//import routes
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Welcome to the Trivia API'})
// })


app.use('/', triviaRoutes);





//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({extended: true}));

//seed route for data folder
//create item in db

//listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
//imports
import express from "express";
import question from "../models/question.mjs";


const router = express.Router();


//create a question route
router.post("/", async (req, res) => {
    try {
        //create a variable
        const newQuestion = new question(req.body);
        await newQuestion.save();
        res.json(newQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg:'Server Error'});
        
    }
})

//read

router.get("/", async (req, res) => {
    try {
        //create a variable
        const allQuestions = await question.find(req.body);
        res.json(allQuestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg:'Server Error'});
        
    }
})

//update

//delete

export default router;
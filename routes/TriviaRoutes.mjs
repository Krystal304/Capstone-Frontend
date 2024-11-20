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
router.put('/:id', async (req, res) => {
    try {
       //create a variable
       let updatedQuestion = await question.findByIdAndUpdate(req.params.id, req.body, {new: true})
       res.json(updatedQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg:'Server Error'});
        
    }
})

//delete

export default router;
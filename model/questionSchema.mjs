import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    correct_answer: { type: String, required: true },
    incorrect_answers: [{ type: String, required: true }],
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
  });


  //creating an index
  questionSchema.index({ question: "text" });
  export default mongoose.model("Question", questionSchema);
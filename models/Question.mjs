import mongoose from "mongoose";



const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answers: [{ text: String, correct: Boolean }],
  correct_answer: { type: String, required: true },
  difficulty: { type: String, required: true }, 
  type: { type: String, required: true },     
  category: { type: String, required: true },  
});




//create an index
questionSchema.index({ category: 1, type: 1, difficulty: 1 }, { unique: true });

export default mongoose.model("Question", questionSchema);
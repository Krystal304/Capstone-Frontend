import mongoose from "mongoose";






const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answers: [
    {
      text: { type: String, required: true },
      correct: { type: Boolean, required: true },
    },
  ],
});



//create an index


export default mongoose.model("Question", questionSchema);
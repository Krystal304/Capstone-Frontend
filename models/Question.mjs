import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true,
    },
    correct_answer: {
        type: String,
        required: true
    },
    incorrect_answers: {
        type: Array,
        required: true
    }
})

//create an index
questionSchema.index({ category: 1, type: 1, difficulty: 1 }, { unique: true });

export default mongoose.model("Question", questionSchema);
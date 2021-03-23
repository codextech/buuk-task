
import { Document } from 'mongoose';




export class QuizQuestionsDocument {
    _id: string
    questionId?: string;
    isCorrectAnswer?: string;
}

export class QuizDocument extends Document {
    userId: string;
    score: number;
    attemptedQuestions?: QuizQuestionsDocument[];
    isDeleted?: boolean;
}
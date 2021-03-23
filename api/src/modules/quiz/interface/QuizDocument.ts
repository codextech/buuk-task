
import { Document } from 'mongoose';




export class QuizQuestionsDocument {
    questionId?: string;
    isCorrectAnswer?: boolean;
}

export class QuizDocument extends Document {
    userId: string;
    score: number;
    attemptedQuestions?: QuizQuestionsDocument[];
    isDeleted?: boolean;
    duration?: number
}
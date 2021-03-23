


import { Document } from 'mongoose';




export class AnswerDocument {
    _id: string
    text: string;
    isRightAnswer: boolean;
}

export class QuestionDocument extends Document {
    text: number;
    answers?: AnswerDocument[];
    isDeleted?: boolean;
}
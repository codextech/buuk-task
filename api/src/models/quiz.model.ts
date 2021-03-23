

import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const QuizSchema = new mongoose.Schema(
    {


        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'user is required']
        },
        score: { type: Number },

        attemptedQuestions: [
            {
                questionId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Question',
                },
                isCorrectAnswer: { type: Boolean, default: null }
            }
        ],


        statredAt: { type: Date, default: Date.now() },
        endedAt: { type: Date },


        // sofe delete
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

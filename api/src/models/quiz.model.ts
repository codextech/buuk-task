

import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const QuestionSchema = new mongoose.Schema(
    {


        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'user is required']
        },
        score: { type: Number },

        questions: [
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

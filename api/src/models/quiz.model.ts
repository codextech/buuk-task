

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
                type: Schema.Types.ObjectId,
                ref: 'Question',
            }
        ],



        statredAt: { type: Date, default: Date.now() },
        endedAt: { type: Date },

        answers: [
            {
                text: { type: String, lowercase: true, required: true },
                isRightAnswer: { type: Boolean, default: false }
            }
        ],

        // sofe delete
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

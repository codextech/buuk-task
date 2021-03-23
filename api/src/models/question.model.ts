import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema(
    {
        text: { type: String, lowercase: true, required: true },

        answers: [
            {
                text: { type: String, lowercase: true, required: true },
                isRightAnswer: { type: Boolean, default: false }
            }
        ],

        // soft delete
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

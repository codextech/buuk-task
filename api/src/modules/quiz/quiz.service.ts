/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionService } from '../question/question.service';
import { CreateQuizDto } from './dto/CreateQuizDto';
import { UpdateQuizDto } from './dto/UpdateQuizDto';
import { QuizDocument } from './interface/QuizDocument';

@Injectable()
export class QuizService {


    constructor(
        @InjectModel('Quiz') private readonly quizModel: Model<QuizDocument>,
        private questionService: QuestionService
    ) { }


    getList(query) {
        return this.quizModel.find(query).sort({
            _id: -1
        });
    }


    getOne() {
        //
    }

    getById() {
        //
    }


    async create(body: CreateQuizDto) {

        /*  pick random 4 question */
        const questions = await this.questionService.getRandomQuestion()

        const questionsModelForQuiz = questions.map(q => {
            return {
                questionId: q._id
            }
        });

        body.attemptedQuestion = questionsModelForQuiz;
        /* crerate quiz */
        const creratedQuiz = await this.quizModel.create(body);

        return { quizId: creratedQuiz._id, questions };
    }


    async sumbitUserQuiz(id, body: UpdateQuizDto) {

        /* set end date */
        body.endedAt = new Date();

        return await this.quizModel.findByIdAndUpdate(id, {
            $set: {
                endedAt: body.endedAt,
                attemptedQuestions: body.attemptedQuestions,
                score: body.score
            }
        });
    }



}

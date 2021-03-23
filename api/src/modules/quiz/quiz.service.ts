/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuizDto } from './dto/CreateQuizDto';
import { UpdateQuizDto } from './dto/UpdateQuizDto';
import { QuizDocument } from './interface/QuizDocument';

@Injectable()
export class QuizService {


    constructor(
        @InjectModel('Quiz') private readonly quizModel: Model<QuizDocument>
    ) { }


    getList(query) {
        return this.quizModel.find(query);
    }


    getOne() {
        //
    }

    getById() {
        //
    }


    async create(body: CreateQuizDto) {
        return await this.quizModel.create(body);
    }


    async sumbitUserQuiz(id, body: UpdateQuizDto) {

        /* set end date */
        body.endedAt = new Date(Date.now());

        return await this.quizModel.findByIdAndUpdate(id, body);
    }



}

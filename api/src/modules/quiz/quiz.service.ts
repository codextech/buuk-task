import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizDocument } from './interface/QuizDocument';

@Injectable()
export class QuizService {


    constructor(
        @InjectModel('Quiz') private readonly quizModel: Model<QuizDocument>
    ) { }


    getList() {
        //
    }


    getOne() {
        //
    }

    getById() {
        //
    }


    create() {
        //
    }


    updateById() {
        //
    }



}

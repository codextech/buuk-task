/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionDocument } from './interface/QuestionDocument';

@Injectable()
export class QuestionService {

    constructor(
        @InjectModel('Question') private readonly questionModel: Model<QuestionDocument>
    ) { }


    async bulkCreate(data) {
        return await this.questionModel.insertMany(data);
    }


    async getRandomQuestion(): Promise<QuestionDocument[]> {
        /* 4 random */
        const result = (await this.questionModel.aggregate([{ $sample: { size: 4 } }]))

        return result as QuestionDocument[]
    }






}

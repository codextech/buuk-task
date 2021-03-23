import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuestionService {

    constructor(
        @InjectModel('Question') private readonly questionModel: Model<any>
    ) { }


    async bulkCreate(data) {
        return await this.questionModel.insertMany(data);
    }


}

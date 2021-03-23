/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { QuestionService } from '../question.service';
import { data } from './data';


@Injectable()
export class QuestionSeed {
    constructor(
        private readonly questionService: QuestionService,
    ) { }

    @Command({ command: 'create:question', describe: 'create some questions', autoExit: true })
    async create() {
        const result = await this.questionService.bulkCreate(data.questions);
        console.log(result);
    }
}
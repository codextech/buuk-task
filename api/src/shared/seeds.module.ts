


import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { QuestionModule } from 'src/modules/question/question.module';
import { QuestionSeed } from 'src/modules/question/seed/question.seed';
import { SharedModule } from './shared.module';

@Module({
    imports: [CommandModule,
        QuestionModule,
        SharedModule],
    providers: [QuestionSeed],
    exports: [QuestionSeed],
})
export class SeedsModule { }
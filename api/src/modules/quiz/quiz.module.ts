import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from 'src/models/quiz.model';
import { QuestionModule } from '../question/question.module';

@Module({
    imports: [


        MongooseModule.forFeatureAsync([{
            name: 'Quiz',
            useFactory: () => {
                const schema = QuizSchema;
                return schema;
            }
        }]),
        SharedModule,
        QuestionModule
    ],
    controllers: [
        QuizController,],
    providers: [
        QuizService,],
})
export class QuizModule { }

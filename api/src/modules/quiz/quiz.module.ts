import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from 'src/models/quiz.model';

@Module({
    imports: [


        MongooseModule.forFeatureAsync([{
            name: 'Quiz',
            useFactory: () => {
                const schema = QuizSchema;
                return schema;
            }
        }]),
        SharedModule
    ],
    controllers: [
        QuizController,],
    providers: [
        QuizService,],
})
export class QuizModule { }

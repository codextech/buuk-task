import { QuestionService } from './question.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from 'src/models/question.model';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    imports: [

        MongooseModule.forFeatureAsync([{
            name: 'Question',
            useFactory: () => {
                const schema = QuestionSchema;
                return schema;
            }
        }]),
        SharedModule
    ],
    controllers: [],
    providers: [
        QuestionService,],
    exports: [
        QuestionService
    ]
})
export class QuestionModule { }

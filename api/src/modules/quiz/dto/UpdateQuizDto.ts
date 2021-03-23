




import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class AttemptedQuestion {

    @IsString()
    question?: string;
    isCorrectAnswer: boolean

}


export class UpdateQuizDto {


    @IsNotEmpty()
    @Type(() => AttemptedQuestion)
    attemptedQuestions: AttemptedQuestion[];

    @IsNumber()
    score: number;

    endedAt: Date;

}
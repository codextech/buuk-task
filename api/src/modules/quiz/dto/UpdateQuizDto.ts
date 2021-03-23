




import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString } from "class-validator";


export class AttemptedQuestion {

    @IsString()
    question: string;
}


export class UpdateQuizDto {


    @IsArray()
    @Type(() => AttemptedQuestion)
    attemptedQuestion: AttemptedQuestion[];

    endedAt : Date;

}
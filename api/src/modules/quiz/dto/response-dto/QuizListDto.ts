

import { Exclude, Expose } from "class-transformer";
import { QuizDetailsDto } from "./QuizDetailsDto";




@Exclude()
export class QuizListDto {

    @Expose()
    data?: QuizDetailsDto[]


    @Expose()
    meta?: any;


    constructor(partial: Partial<QuizListDto>) {
        Object.assign(this, partial);
    }
}
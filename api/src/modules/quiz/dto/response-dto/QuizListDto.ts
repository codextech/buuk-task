

import { Exclude, Expose } from "class-transformer";




@Exclude()
export class QuizListDto {

    @Expose()
    data?: QuizListDto[]


    @Expose()
    meta?: any;


    constructor(partial: Partial<QuizListDto>) {
        Object.assign(this, partial);
    }
}
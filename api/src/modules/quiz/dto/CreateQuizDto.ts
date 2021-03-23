

import { IsNotEmpty, IsString } from "class-validator";


class AttemptedQuestion {

    questionId?: string
    isCorrectAnswer?: boolean
}


export class CreateQuizDto {

    userId: string;
    score = 0;
    attemptedQuestion: AttemptedQuestion[]

}
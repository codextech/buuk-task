


import { Exclude, Expose, Transform } from "class-transformer";



@Exclude()
export class QuizDetailsDto {


    @Transform((v) => String(v).toString(), { toPlainOnly: true })
    @Expose()
    _id: string

    @Transform((v) => String(v).toString(), { toPlainOnly: true })
    userId: string;

    @Expose()
    score: number;


    @Expose()
    startedAt?: Date;

    @Expose()
    endedAt?: Date;


    @Expose()
    createdAt?: Date;


    /* joins */
    // @Expose()
    // @Type(() => UserResponseDto)
    // user?: UserResponseDto;


    constructor(partial: Partial<QuizDetailsDto>) {
        Object.assign(this, partial);
    }
}
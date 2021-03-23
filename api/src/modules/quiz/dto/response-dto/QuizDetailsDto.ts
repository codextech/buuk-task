


import { Exclude, Expose, Transform } from "class-transformer";
import moment from "moment";



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
    duration() {
        return (moment.duration(moment(this.endedAt).diff(this.startedAt, 'seconds', true))) || 0;
    }


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
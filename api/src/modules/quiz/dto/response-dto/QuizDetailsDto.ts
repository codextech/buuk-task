


import { Exclude, Expose, Transform } from "class-transformer";
import * as moment from "moment";



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
    statredAt?: Date;

    @Expose()
    endedAt?: Date;


    @Expose()
    duration() {
        // const d = moment.duration(moment(this.startedAt).diff(this.endedAt)).asSeconds().toFixed(0) || 0;


        const startDate = moment.utc(this.statredAt);
        const endDate = moment.utc(this.endedAt);
        const duration = moment.duration(endDate.diff(startDate));
        return +duration.seconds().toFixed(0);
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
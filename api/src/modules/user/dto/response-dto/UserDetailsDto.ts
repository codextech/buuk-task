




import { Exclude, Expose, Transform } from "class-transformer";


@Exclude()
export class UserDetailsDto {


    @Transform((v) => String(v).toString())
    @Expose()
    _id: string


    @Expose()
    name?: string;

    @Expose()
    email?: string;

    constructor(partial: Partial<UserDetailsDto>) {
        Object.assign(this, partial);
    }
}

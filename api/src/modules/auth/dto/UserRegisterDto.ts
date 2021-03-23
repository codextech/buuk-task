



import {
    IsArray,
    isArray,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MinLength,
} from 'class-validator';
import { RoleType } from 'src/core/common/constants/role-type';

export class UserRegisterDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;


    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @MinLength(6)
    readonly password: string;

}
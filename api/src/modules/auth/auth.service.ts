import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { TokenPayloadDto } from './dto/TokenPayloadDto';
import * as bcrypt from 'bcrypt';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { RoleType } from 'src/core/common/constants/role-type';
import { RegisterMethod } from 'src/core/common/constants/register-method';
import { UserDocument } from '../user/interface/UserDocument';

@Injectable()
export class AuthService {

  constructor(
    public readonly jwtService: JwtService,
    public readonly configService: ConfigService,
    public readonly userService: UserService,
  ) { }


  async validateUser(email: string, plainPassword: string): Promise<any> {
    let user = await this.userService.findOne({ email });
    if (!user) throw new BadRequestException('Inavlid Passsword or Email');
    user = user.toJSON(); //plain mongoose object
    const isPasswordMatching = await bcrypt.compare(
      plainPassword,
      user.password,
    );
    if (!isPasswordMatching)
      throw new BadRequestException('Inavlid Passsword or Email');

    const { password, verifyShortToken, verifyExpires, ...result } = user;
    return result;
  }



  async login(user: any) {
    const payload = {
      email: user.email,
      _id: user._id,
      name: user.name,
      userType: user.userType
    };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }


  async register(userRegisterDto: UserRegisterDto) {
    const createUserDto: UserRegisterDto = {
      ...userRegisterDto,
      password: await bcrypt.hash(userRegisterDto.password, 10),
    };
    const user = await this.userService.create(createUserDto);
    return user;
  }


}

import { Controller, Request, Post, UseGuards, Body, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/core/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/UserRegisterDto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  // login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }


  // local register
  @Post('register')
  async register(@Body() userRegisterDto: UserRegisterDto): Promise<any> {
    console.log("AuthController -> constructor -> createUserDto", userRegisterDto)
    const createdUser = await this.authService.register(userRegisterDto);
    return this.authService.login(createdUser);
  }

}

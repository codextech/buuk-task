/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { AuthUser } from 'src/core/decorators/auth-user.decorator';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { UserDetailsDto } from '../user/dto/response-dto/UserDetailsDto';
import { CreateQuizDto } from './dto/CreateQuizDto';
import { QuizDetailsDto } from './dto/response-dto/QuizDetailsDto';
import { QuizListDto } from './dto/response-dto/QuizListDto';
import { UpdateQuizDto } from './dto/UpdateQuizDto';
import { QuizService } from './quiz.service';



@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@Controller('quizes')
export class QuizController {

    constructor(private readonly quizService: QuizService) {
    }


    @Get()
    async findAll(@Query() query): Promise<QuizListDto> {
        const result = await this.quizService.getList(query);
        return new QuizListDto({
            data: plainToClass(QuizDetailsDto, result),
        });
    }


    @Post()
    async create(@AuthUser() user: UserDetailsDto, @Body() body: CreateQuizDto) {
        /* curent logged-in user added - could be set in interceptor too */
        body.userId = user._id;
        const result = await this.quizService.create(body);
        console.log("🚀 ~ file: quiz.controller.ts ~ line 38 ~ QuizController ~ create ~ result", result)
        return result;
    }




    @Put('/submit/:id')
    async submitQuiz(@Param('id') id, @Body() body: UpdateQuizDto): Promise<QuizDetailsDto> {
        /* curent logged-in user added - could be set in interceptor too */
        const result = await this.quizService.sumbitUserQuiz(id, body);
        return result;
    }



}

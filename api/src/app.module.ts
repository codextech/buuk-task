import { QuestionModule } from './modules/question/question.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedsModule } from './shared/seeds.module';

@Module({
  imports: [
    QuestionModule,
    QuizModule,
    ConfigModule.forRoot({
      envFilePath: `./env/.${process.env.NODE_ENV || 'development'}.env`,
      isGlobal: true
    }),
    // database
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
          // mongoose.set('debug' , true)
          return {
            uri: configService.get<string>('DATABASE_URI'),
          }
        },
        inject: [ConfigService],
      }),

    SeedsModule,

    SharedModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

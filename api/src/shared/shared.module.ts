import { Global, HttpModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';




@Module({
  imports: [
    HttpModule,

    JwtModule.registerAsync({
        useFactory: (configService: ConfigService) => ({
            secretOrPrivateKey: configService.get('JWT_SECRET_KEY'),
            // if you want to use token with expiration date
            // signOptions: {
            //     expiresIn: configService.getNumber('JWT_EXPIRATION_TIME'),
            // },
        }),
        inject: [ConfigService],
    }),
    
  ],
  controllers: [],

  exports: [HttpModule, JwtModule],

})
export class SharedModule {}

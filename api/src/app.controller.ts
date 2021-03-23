import { Controller, Get, HostParam } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@HostParam() account: string): string {
    console.log(account);
    return this.appService.getHello();
  }
}

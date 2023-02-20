import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SendOperationOtpGuard } from 'otp-guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(SendOperationOtpGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Grp
  getHelloo(): string {
    return this.appService.getHello();
  }
}

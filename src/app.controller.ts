import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOtpDto } from './dto/sentOtp.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  sentOTP(
    @Body() createOtpDto: CreateOtpDto
  ){
    return this.appService.createOTP(createOtpDto)
  }
}

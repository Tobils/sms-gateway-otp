import { Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/sentOtp.dto';
const Nexmo = require('nexmo');

@Injectable()
export class AppService {
  private nexmo = new Nexmo({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  });

  getHello(): string {
    return 'Hello World!';
  }

  createOTP(
    createOtpDto: CreateOtpDto
  ){
    const from = 'Ruang Mendengar';
    const to = createOtpDto.phone_number;
    const otp = this.generateOTP(createOtpDto.phone_number)
    const text = '[test otp rm]kode OTP: '+otp+'. Berlaku untuk 5 menit';

    this.nexmo.message.sendSms(from, to, text)
    return {message: "otp was sent"};
  }


  private generateOTP(phone_number: string): string{
    let OTP = ''
    for(let iterasi = 0; iterasi < 4; iterasi++){
      OTP += phone_number[Math.floor(Math.random() * 10)];
    }

    console.log(`otp number for ${phone_number} is ${OTP}`);
    return OTP;
  }
}





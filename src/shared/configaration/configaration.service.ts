import {Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfiguarationService{
   private environmentHosting:string =process.env.NODE_ENV || 'development'

   constructor(private readonly configService: ConfigService) { }

   get isDevelopment(): boolean {
    return this.environmentHosting === 'development';
  }
}
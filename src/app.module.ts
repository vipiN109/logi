import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import {ConfigModule} from '@nestjs/config'
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    ModulesModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

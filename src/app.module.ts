import { Module } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import appConfig from './config/app.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    HttpModule,
    CardModule,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}

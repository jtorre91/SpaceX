import { CardService } from './card.service';
import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        timeout: configService.get('appConfig.apiTrello.timeout'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardController],
})
export class CardModule {}

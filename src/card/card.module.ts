import { CardService } from './card.service';
import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { QueryBuilder } from './builders/query.builder';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        timeout: configService.get('appConfig.apiTrello.timeout'),
        maxRedirects: configService.get('appConfig.apiTrello.maxRedirects'),
        params: {
          key: configService.get('appConfig.apiTrello.key'),
          token: configService.get('appConfig.apiTrello.token'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [CardController],
  providers: [CardController, CardService, QueryBuilder],
  exports: [CardController],
})
export class CardModule {}

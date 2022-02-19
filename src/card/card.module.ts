import { CardService } from './card.service';
import { Module } from '@nestjs/common';
import { CardController } from './card.controller';

@Module({
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}

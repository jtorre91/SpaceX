import { CardService } from './card.service';
import { Controller, Post } from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
  @Post()
  create(): string {
    return this.cardService.createCard();
  }
}

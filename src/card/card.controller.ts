import { Card } from './models/card';
import { CardService } from './card.service';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
  @Post()
  create(@Body() card: Card): string {
    try {
      return JSON.stringify(this.cardService.createCard(card));
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error, error.message);
    }
  }
}

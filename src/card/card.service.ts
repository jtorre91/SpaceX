import { Injectable } from '@nestjs/common';
import { Card } from './models/card';

@Injectable()
export class CardService {
  createCard(card: Card): Card {
    return card;
  }
}

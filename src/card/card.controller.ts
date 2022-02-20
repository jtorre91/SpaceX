import { ConfigService } from '@nestjs/config';
import { Card } from './models/card';
import { CardService } from './card.service';
// eslint-disable-next-line prettier/prettier
import { BadRequestException, Body, Controller, Get, Post, Req } from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(
    private readonly configService: ConfigService,
    private readonly cardService: CardService,
  ) {}

  private readonly key = this.configService.get('appConfig.apiTrello.key');
  private readonly token = this.configService.get('appConfig.apiTrello.token');
  // eslint-disable-next-line prettier/prettier
  private readonly idList = this.configService.get('appConfig.apiTrello.idList');

  @Get('/list')
  async lists(): Promise<any> {
    try {
      const query = `62101c96a9bb7d34db53d278/lists?key=${this.key}&token=${this.token}`;
      return this.cardService.getLists(query);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error, error.message);
    }
  }

  @Post()
  async create(@Body() card: any): Promise<any> {
    try {
      const query = this.queryBuilder(card);
      const res = await this.cardService.createCard(query);
      return res;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error, error.message);
    }
  }

  private queryBuilder(card: Card): string {
    return `idList=${this.idList}&name=${card.title}2&desc=${card.description}&key=${this.key}&token=${this.token}`;
  }
}

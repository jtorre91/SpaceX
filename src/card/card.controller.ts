/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import { CardService } from './card.service';
import { QueryBuilder } from './builders/query.builder';
import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(
    private readonly configService: ConfigService,
    private readonly cardService: CardService,
    private readonly queryBuilder: QueryBuilder,
  ) {}

  private readonly trelloConfig = this.configService.get('appConfig.apiTrello');

  @Post()
  async create(@Body() card: any): Promise<any> {
    try {
      const query = await this.queryBuilder.buildCreate(card, this.trelloConfig, this);
      await this.cardService.createCard(query);
      return 'Card created successful';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('/board')
  async searchOnBoard(@Query('search') item: string): Promise<any> {
    try {
      if (item) {
        const query = this.queryBuilder.search(item, this.trelloConfig);
        return this.cardService.getBoards(query);
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}

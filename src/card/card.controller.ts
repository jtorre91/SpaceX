import { ConfigService } from '@nestjs/config';
import { CardService } from './card.service';
import { QueryBuilder } from './builders/query.builder';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(
    private readonly configService: ConfigService,
    private readonly cardService: CardService,
    private readonly queryBuilder: QueryBuilder,
  ) {}

  private readonly trelloConfig = this.configService.get('appConfig.apiTrello');
  private readonly key = this.trelloConfig.key;
  private readonly token = this.trelloConfig.token;
  private readonly idBoard = this.trelloConfig.idBoard;

  @Post()
  async create(@Body() card: any): Promise<any> {
    try {
      const query = this.queryBuilder.build(card, this.trelloConfig);
      return await this.cardService.createCard(query);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error, error.message);
    }
  }

  @Get('/lists')
  async lists(): Promise<any> {
    try {
      const query = `${this.idBoard}/lists?key=${this.key}&token=${this.token}`;
      return this.cardService.getBoards(query);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error, error.message);
    }
  }

  @Get('/labels')
  async labels(): Promise<any> {
    try {
      const query = `${this.idBoard}/labels?key=${this.key}&token=${this.token}`;
      return this.cardService.getBoards(query);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error, error.message);
    }
  }
}

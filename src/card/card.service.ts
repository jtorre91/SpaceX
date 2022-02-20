/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Card } from './models/card';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class CardService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private readonly url = this.configService.get('appConfig.apiTrello.url');
  private readonly timeout = this.configService.get('appConfig.apiTrello.timeout');

  async createCard(card: Card): Promise<any> {
    try {
      console.log('Create card in trello');
      const res = this.httpService.post(
        `${this.url}/cards?`,
        card,
        {
          headers: {
            'Content-type': 'application/json',
          },
        },
      ).pipe(
        map(response => response.data)
      );
      return await lastValueFrom(res) as any;
  } catch (error) {
      console.error(`Error creating card: ${error.message}`, error);
      throw error;
  }
  }
}

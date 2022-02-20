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
  ) { }

  private readonly url = this.configService.get('appConfig.apiTrello.url');


  async getLists(query: string): Promise<any> {
    try {
        const config = this.configService.get('appConfig');
        const url = config.apiTrello.url;
        const result = this.httpService.get(`${url}/boards/${query}`, {
            headers: {
              'Content-type': 'application/json',
            }
        }).pipe(
            map(response => response.data)
        );
        return await lastValueFrom(result) as any
    } catch (error) {
        throw error;
    }
}

  async createCard(query: string): Promise<any> {
    try {
      console.log('Create card in trello');
      const result = this.httpService.post(
        `${this.url}/cards?${query}`,
        {},
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      ).pipe(
        map(response => response.data)
      );
      return  await lastValueFrom(result) as any;
    } catch (error) {
      console.error(`Error creating card: ${error.message}`, error);
      return error;
    }
  }
}

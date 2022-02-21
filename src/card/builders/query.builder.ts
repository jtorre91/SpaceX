import { CardType } from '../models/card.type';
import { Card } from '../models/card';
import { TrelloParams } from '../models/trello.params';

export class QueryBuilder {
  build(card: Card, apiTrello: any): string {
    const key = card.type.toUpperCase();
    if (apiTrello.cardTypes.includes(key)) {
      const mapper = new CardType().mapper(card, apiTrello);
      if (mapper.has(key)) {
        const params = new TrelloParams(
          apiTrello.key,
          apiTrello.token,
          apiTrello.idList,
          mapper.get(key),
        );
        return params.toQuery();
      }
    }
    throw Error('Type not exists');
  }
}

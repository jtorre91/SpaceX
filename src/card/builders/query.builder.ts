import { CardType } from '../models/card.type';
import { Card } from '../models/card';
import { TrelloParams } from '../models/trello.params';
import { CardController } from '../card.controller';

export class QueryBuilder {
  async buildCreate(
    card: Card,
    apiTrello: any,
    cardController: CardController,
  ): Promise<string> {
    const key = card.type.toUpperCase();
    const mapper = new CardType().mapper(card, apiTrello.shuffleMembers);
    if (mapper.has(key)) {
      const params = new TrelloParams(
        apiTrello.key,
        apiTrello.token,
        apiTrello.idList,
        mapper.get(key),
        cardController,
      );
      return await params.toQuery();
    }
    throw Error('Type not exists');
  }

  search(item: string, apiTrello: any): string {
    return `${apiTrello.idBoard}/${item}?key=${apiTrello.key}&token=${apiTrello.token}`;
  }
}

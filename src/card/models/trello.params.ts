/* eslint-disable prettier/prettier */
import { CardController } from './../card.controller';
import { Category } from './category';
export class TrelloParams {
  private readonly key: string;
  private readonly token: string;
  private readonly idList: string;
  private readonly name: string;
  private readonly desc?: string;
  private readonly category?: string;
  private readonly shuffleMembers?: boolean;

  constructor(
    key: string,
    token: string,
    idList: string,
    otherParams: any,
    private readonly cardController: CardController,
  ) {
    this.key = key;
    this.token = token;
    this.idList = idList;
    if (otherParams.name) this.name = otherParams.name;
    else throw Error('The field title is missing');
    this.desc = otherParams.desc ? otherParams.desc : null;
    this.category = otherParams.category ? otherParams.category : null;
    this.shuffleMembers = otherParams.shuffleMembers ? otherParams.shuffleMembers : false;
  }

  async toQuery() { 
    let query = `key=${this.key}&token=${this.token}&idList=${this.idList}&name=${this.name}`;
    if (this.desc) query = query.concat(`&desc=${this.desc}`);
    if (this.category) query = await this.setLabel(query);
    if (this.shuffleMembers) query = await this.setMember(query);
    return query;
  }

  private async setLabel(query: string) {
    if (this.category) {
      const labels = await this.cardController.searchOnBoard('labels');
      const mapper = new Category().mapper(labels);
      const key = this.category.toUpperCase();
      if (mapper.has(key)) {
        const idLabels = [mapper.get(key)];
        return query.concat(`&idLabels=${idLabels}`) 
      } 
      else throw Error('The field category is missing');
    } 
  }
 
  private async setMember(query: string) {
    const members = await this.cardController.searchOnBoard('members');
    const user = members[Math.floor(Math.random() * members.length)];
    return query.concat(`&idMembers=${user.id}`)
  }
}

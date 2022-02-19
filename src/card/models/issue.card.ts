import { Card } from './card';
import { CardType } from './card.type';
import { IsString } from 'class-validator';

export class IssueCard extends Card {
  readonly type: CardType.ISSUE;
  @IsString()
  readonly title: string;
  @IsString()
  readonly description: string;

  constructor(title: string, desc: string) {
    super();
    this.title = title;
    this.description = desc;
  }
}

import { Card } from './card';
import { CardType } from './card.type';

export class BugCard extends Card {
  private MIN_NUM = 0;
  private MAX_NUM = 10000;

  readonly type: CardType.BUG;
  readonly title: string;
  readonly description: string;

  constructor(desc: string) {
    super();
    this.title = this.getTitle();
    this.description = desc;
  }

  private getTitle() {
    const words = [
      'Space',
      'Rocket',
      'Planet',
      'Stars',
      'Sun',
      'Moon',
      'Earth',
      'Mars',
      'Galaxy',
      'Aliens',
    ];
    const wIndex = Math.floor(Math.random() * words.length);
    const word = words[wIndex];
    const number = Math.random() * (this.MAX_NUM - this.MIN_NUM) + this.MIN_NUM;
    return `Bug-${word}-${number}`;
  }
}

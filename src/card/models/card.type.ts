import { Card } from './card';

export class CardType {
  private MIN_SEED = 0;
  private MAX_SEED = 10000;

  mapper(card: Card, trello: any): Map<string, any> {
    const map = new Map<string, any>();
    map.set('BUG', {
      name: this.createBugTitle(),
      desc: card.description,
      category: 'BUG',
      idMembers: trello.idMembers, // Make a categoryMapper
    });
    map.set('ISSUE', {
      name: card.title,
      desc: card.description,
    });
    map.set('TASK', {
      name: card.title,
      category: card.category, // Make a categoryMapper
    });
    return map;
  }

  private createBugTitle() {
    // I usually would get a dictionary from a library, but for a demo this should be enought
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
    // eslint-disable-next-line prettier/prettier
    const number = Math.floor(Math.random() * (this.MAX_SEED - this.MIN_SEED + 1) + this.MIN_SEED);
    return `Bug-${word}-${number}`;
  }
}

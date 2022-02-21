import { Card } from './card';

export class CardType {
  private MIN_NUM = 0;
  private MAX_NUM = 1000;

  mapper(card: Card, trello: any): Map<string, any> {
    const map = new Map<string, any>();
    map.set('BUG', {
      name: this.createBugTitle(),
      desc: card.description,
      idLabels: '62101c968166f38753e0de83', // Make a categoryMapper
    });
    map.set('ISSUE', {
      name: card.title,
      desc: card.description,
    });
    map.set('TASK', {
      name: card.title,
      idLabels: trello.idLabels, // Make a categoryMapper
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
    const number = Math.random() * (this.MAX_NUM - this.MIN_NUM) + this.MIN_NUM;
    return `Bug-${word}-${number}`;
  }
}

import { BadRequestException } from '@nestjs/common';
import { Category } from './category';
import { Card } from './card';
import { CardType } from './card.type';
import { IsString } from 'class-validator';

export class TaskCard extends Card {
  readonly type: CardType.TASK;
  @IsString()
  readonly title: string;
  @IsString()
  readonly category: string;

  constructor(title: string, category: string) {
    super();
    this.title = title;
    if (category in Category) this.category = category;
    else throw new BadRequestException('Category not found');
  }
}

import { IsNotEmpty, IsString } from 'class-validator';

export abstract class Card {
  @IsString()
  @IsNotEmpty()
  readonly type: string;
  readonly title?: string;
  readonly description?: string;
  readonly category?: string;
}

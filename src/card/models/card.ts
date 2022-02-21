import { IsNotEmpty, IsString } from 'class-validator';

export class Card {
  @IsString()
  @IsNotEmpty()
  readonly type: string;
  @IsNotEmpty()
  @IsString()
  readonly title?: string;
  @IsString()
  readonly description?: string;
  @IsString()
  readonly category?: string;
}

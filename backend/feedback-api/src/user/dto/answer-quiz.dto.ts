import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AnswerQuizDto {
  @ApiProperty()
  @IsNotEmpty()
  questionId: number;

  @ApiProperty()
  @IsNotEmpty()
  alterativeId: number;

  @ApiProperty()
  comments: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CommentRequestDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  text: string;
}

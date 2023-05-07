import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
export class CommentResponseDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  text: string;
}

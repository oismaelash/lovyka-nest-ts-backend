import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
export class CommentResponseDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  text: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  created_at: Date;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  updated_at: Date;
}

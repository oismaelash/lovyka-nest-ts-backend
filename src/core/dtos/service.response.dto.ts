import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsObject, IsString, isDate } from 'class-validator';
import { CommentResponseDTO } from './comment.response.dto';
export class ServiceResponseDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  price: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  likes: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  dislikes: string;

  @IsNotEmpty()
  @IsObject()
  @ApiProperty()
  comments: CommentResponseDTO;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  created_at: Date;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  updated_at: Date;
}

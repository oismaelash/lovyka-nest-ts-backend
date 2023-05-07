import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
export class CommentRequestDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  text: string;

  // @IsNotEmpty()
  // @IsInt()
  // @ApiProperty()
  // serviceId: number;
}

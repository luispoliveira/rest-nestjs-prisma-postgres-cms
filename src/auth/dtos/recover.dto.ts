import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class RecoverDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

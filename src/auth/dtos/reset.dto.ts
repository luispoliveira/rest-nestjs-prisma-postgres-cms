import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResetDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  resetToken: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

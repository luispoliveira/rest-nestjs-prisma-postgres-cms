import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { FindDto } from 'src/common/dtos/find.dto';

export class FindRoleDto extends FindDto {
  @ApiProperty({required: false})
  @IsOptional()
  @IsString()
  name?:string;
}

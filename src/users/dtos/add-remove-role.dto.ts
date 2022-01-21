import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class AddRemoveRoleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  roleId: number;
}

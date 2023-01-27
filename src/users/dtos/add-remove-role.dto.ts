import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class AddRemoveRoleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  roleId: number;
}

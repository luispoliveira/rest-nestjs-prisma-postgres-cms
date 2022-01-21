import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class AddPermissionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  permissionId: number;
}

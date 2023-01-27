import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class AddRemovePermissionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  permissionId: number;
}

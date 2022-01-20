import { ApiProperty } from '@nestjs/swagger';
import { Permission } from './permission.entity';
import { User } from './user.entity';

export class Permissions2Users {
  @ApiProperty({ type: Permission })
  permission?: Permission;
  @ApiProperty()
  permissionId: number;
  user?: User;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  createdBy: string | null;
  @ApiProperty()
  updatedBy: string | null;
}

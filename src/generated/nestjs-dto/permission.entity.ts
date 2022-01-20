import { Permissions2Users } from './permissions2Users.entity';
import { Permissions2Roles } from './permissions2Roles.entity';
import { ApiProperty } from '@nestjs/swagger';

export class Permission {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  users?: Permissions2Users[];
  roles?: Permissions2Roles[];
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  createdBy: string | null;
  @ApiProperty()
  updatedBy: string | null;
}

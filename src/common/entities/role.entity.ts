import { Roles2Users } from './roles2Users.entity';
import { Permissions2Roles } from './permissions2Roles.entity';
import { ApiProperty } from '@nestjs/swagger';

export class Role {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  users?: Roles2Users[];
  permissions?: Permissions2Roles[];
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  createdBy: string | null;
  @ApiProperty()
  updatedBy: string | null;
}

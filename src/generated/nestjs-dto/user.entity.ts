import { Roles2Users } from './roles2Users.entity';
import { Permissions2Users } from './permissions2Users.entity';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty({ type: Roles2Users, isArray: true })
  roles?: Roles2Users[];
  @ApiProperty({ type: Permissions2Users, isArray: true })
  permissions?: Permissions2Users[];
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  createdBy: string | null;
  @ApiProperty()
  updatedBy: string | null;
}

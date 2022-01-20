import { ApiProperty } from '@nestjs/swagger';
import { Role } from './role.entity';
import { User } from './user.entity';

export class Roles2Users {
  @ApiProperty({ type: Role })
  role?: Role;
  @ApiProperty()
  roleId: number;
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

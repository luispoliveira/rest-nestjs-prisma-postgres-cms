
import {Permission} from './permission.entity'
import {Role} from './role.entity'


export class Permissions2Roles {
  permission?: Permission ;
permissionId: number ;
role?: Role ;
roleId: number ;
createdAt: Date ;
updatedAt: Date ;
createdBy: string  | null;
updatedBy: string  | null;
}

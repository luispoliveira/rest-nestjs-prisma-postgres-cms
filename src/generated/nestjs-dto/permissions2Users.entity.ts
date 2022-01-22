
import {Permission} from './permission.entity'
import {User} from './user.entity'


export class Permissions2Users {
  permission?: Permission ;
permissionId: number ;
user?: User ;
userId: number ;
createdAt: Date ;
updatedAt: Date ;
createdBy: string  | null;
updatedBy: string  | null;
}


import {Permissions2Users} from './permissions2Users.entity'
import {Permissions2Roles} from './permissions2Roles.entity'


export class Permission {
  id: number ;
name: string ;
users?: Permissions2Users[] ;
roles?: Permissions2Roles[] ;
createdAt: Date ;
updatedAt: Date ;
createdBy: string  | null;
updatedBy: string  | null;
}


import {Roles2Users} from './roles2Users.entity'
import {Permissions2Roles} from './permissions2Roles.entity'


export class Role {
  id: number ;
name: string ;
users?: Roles2Users[] ;
permissions?: Permissions2Roles[] ;
createdAt: Date ;
updatedAt: Date ;
createdBy: string  | null;
updatedBy: string  | null;
}


import {Roles2Users} from './roles2Users.entity'
import {Permissions2Users} from './permissions2Users.entity'


export class User {
  id: number ;
username: string ;
email: string ;
password: string ;
isActive: boolean ;
resetPasswordToken: string  | null;
resetPasswordExpires: Date  | null;
roles?: Roles2Users[] ;
permissions?: Permissions2Users[] ;
createdAt: Date ;
updatedAt: Date ;
createdBy: string  | null;
updatedBy: string  | null;
}

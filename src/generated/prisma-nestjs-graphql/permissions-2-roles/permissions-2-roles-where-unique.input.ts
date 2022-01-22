import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesPermissionIdRoleIdCompoundUniqueInput } from './permissions-2-roles-permission-id-role-id-compound-unique.input';

@InputType()
export class Permissions2RolesWhereUniqueInput {

    @Field(() => Permissions2RolesPermissionIdRoleIdCompoundUniqueInput, {nullable:true})
    permissionId_roleId?: Permissions2RolesPermissionIdRoleIdCompoundUniqueInput;
}

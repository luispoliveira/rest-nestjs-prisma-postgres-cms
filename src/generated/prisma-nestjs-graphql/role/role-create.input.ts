import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Roles2UsersCreateNestedManyWithoutRoleInput } from '../roles-2-users/roles-2-users-create-nested-many-without-role.input';
import { Permissions2RolesCreateNestedManyWithoutRoleInput } from '../permissions-2-roles/permissions-2-roles-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @HideField()
    users?: Roles2UsersCreateNestedManyWithoutRoleInput;

    @HideField()
    permissions?: Permissions2RolesCreateNestedManyWithoutRoleInput;
}

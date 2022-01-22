import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRolesInput } from '../permission/permission-create-nested-one-without-roles.input';
import { RoleCreateNestedOneWithoutPermissionsInput } from '../role/role-create-nested-one-without-permissions.input';

@InputType()
export class Permissions2RolesCreateInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @Field(() => PermissionCreateNestedOneWithoutRolesInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolesInput;

    @Field(() => RoleCreateNestedOneWithoutPermissionsInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutPermissionsInput;
}

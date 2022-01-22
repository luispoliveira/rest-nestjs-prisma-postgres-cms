import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutPermissionsInput } from '../role/role-create-nested-one-without-permissions.input';

@InputType()
export class Permissions2RolesCreateWithoutPermissionInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @Field(() => RoleCreateNestedOneWithoutPermissionsInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutPermissionsInput;
}

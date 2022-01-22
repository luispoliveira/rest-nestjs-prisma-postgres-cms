import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRolesInput } from '../permission/permission-create-nested-one-without-roles.input';

@InputType()
export class Permissions2RolesCreateWithoutRoleInput {

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
}

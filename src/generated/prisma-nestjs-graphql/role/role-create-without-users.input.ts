import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Permissions2RolesCreateNestedManyWithoutRoleInput } from '../permissions-2-roles/permissions-2-roles-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutUsersInput {

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
    permissions?: Permissions2RolesCreateNestedManyWithoutRoleInput;
}

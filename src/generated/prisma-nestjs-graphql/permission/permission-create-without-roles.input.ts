import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Permissions2UsersCreateNestedManyWithoutPermissionInput } from '../permissions-2-users/permissions-2-users-create-nested-many-without-permission.input';

@InputType()
export class PermissionCreateWithoutRolesInput {

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
    users?: Permissions2UsersCreateNestedManyWithoutPermissionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Permissions2RolesUncheckedCreateNestedManyWithoutPermissionInput } from '../permissions-2-roles/permissions-2-roles-unchecked-create-nested-many-without-permission.input';

@InputType()
export class PermissionUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
    roles?: Permissions2RolesUncheckedCreateNestedManyWithoutPermissionInput;
}

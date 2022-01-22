import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutUsersInput } from '../permission/permission-create-nested-one-without-users.input';
import { UserCreateNestedOneWithoutPermissionsInput } from '../user/user-create-nested-one-without-permissions.input';

@InputType()
export class Permissions2UsersCreateInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @Field(() => PermissionCreateNestedOneWithoutUsersInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutUsersInput;

    @Field(() => UserCreateNestedOneWithoutPermissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPermissionsInput;
}

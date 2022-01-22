import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPermissionsInput } from '../user/user-create-nested-one-without-permissions.input';

@InputType()
export class Permissions2UsersCreateWithoutPermissionInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @Field(() => UserCreateNestedOneWithoutPermissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPermissionsInput;
}

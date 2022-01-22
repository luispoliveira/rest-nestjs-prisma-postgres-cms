import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRolesInput } from '../user/user-create-nested-one-without-roles.input';

@InputType()
export class Roles2UsersCreateWithoutRoleInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @Field(() => UserCreateNestedOneWithoutRolesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRolesInput;
}

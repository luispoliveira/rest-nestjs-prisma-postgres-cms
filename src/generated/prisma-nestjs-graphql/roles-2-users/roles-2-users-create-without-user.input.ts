import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';

@InputType()
export class Roles2UsersCreateWithoutUserInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;
}

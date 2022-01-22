import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutUsersInput } from './role-update-without-users.input';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';

@InputType()
export class RoleUpsertWithoutUsersInput {

    @Field(() => RoleUpdateWithoutUsersInput, {nullable:false})
    update!: RoleUpdateWithoutUsersInput;

    @Field(() => RoleCreateWithoutUsersInput, {nullable:false})
    create!: RoleCreateWithoutUsersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersUpdateWithoutRoleInput } from './roles-2-users-update-without-role.input';
import { Roles2UsersCreateWithoutRoleInput } from './roles-2-users-create-without-role.input';

@InputType()
export class Roles2UsersUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;

    @Field(() => Roles2UsersUpdateWithoutRoleInput, {nullable:false})
    update!: Roles2UsersUpdateWithoutRoleInput;

    @Field(() => Roles2UsersCreateWithoutRoleInput, {nullable:false})
    create!: Roles2UsersCreateWithoutRoleInput;
}

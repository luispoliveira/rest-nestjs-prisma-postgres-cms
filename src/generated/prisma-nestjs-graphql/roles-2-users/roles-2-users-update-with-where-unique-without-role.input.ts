import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersUpdateWithoutRoleInput } from './roles-2-users-update-without-role.input';

@InputType()
export class Roles2UsersUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;

    @Field(() => Roles2UsersUpdateWithoutRoleInput, {nullable:false})
    data!: Roles2UsersUpdateWithoutRoleInput;
}

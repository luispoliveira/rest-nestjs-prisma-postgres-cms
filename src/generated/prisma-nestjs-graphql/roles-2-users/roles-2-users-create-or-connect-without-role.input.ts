import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersCreateWithoutRoleInput } from './roles-2-users-create-without-role.input';

@InputType()
export class Roles2UsersCreateOrConnectWithoutRoleInput {

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;

    @Field(() => Roles2UsersCreateWithoutRoleInput, {nullable:false})
    create!: Roles2UsersCreateWithoutRoleInput;
}

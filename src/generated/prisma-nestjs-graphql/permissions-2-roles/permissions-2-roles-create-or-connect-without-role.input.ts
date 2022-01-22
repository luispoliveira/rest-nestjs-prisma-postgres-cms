import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesCreateWithoutRoleInput } from './permissions-2-roles-create-without-role.input';

@InputType()
export class Permissions2RolesCreateOrConnectWithoutRoleInput {

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;

    @Field(() => Permissions2RolesCreateWithoutRoleInput, {nullable:false})
    create!: Permissions2RolesCreateWithoutRoleInput;
}

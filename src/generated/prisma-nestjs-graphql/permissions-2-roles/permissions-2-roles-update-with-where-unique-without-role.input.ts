import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesUpdateWithoutRoleInput } from './permissions-2-roles-update-without-role.input';

@InputType()
export class Permissions2RolesUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;

    @Field(() => Permissions2RolesUpdateWithoutRoleInput, {nullable:false})
    data!: Permissions2RolesUpdateWithoutRoleInput;
}

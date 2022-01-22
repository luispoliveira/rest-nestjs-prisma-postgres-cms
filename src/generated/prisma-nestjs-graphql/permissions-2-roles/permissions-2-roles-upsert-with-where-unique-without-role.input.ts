import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesUpdateWithoutRoleInput } from './permissions-2-roles-update-without-role.input';
import { Permissions2RolesCreateWithoutRoleInput } from './permissions-2-roles-create-without-role.input';

@InputType()
export class Permissions2RolesUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;

    @Field(() => Permissions2RolesUpdateWithoutRoleInput, {nullable:false})
    update!: Permissions2RolesUpdateWithoutRoleInput;

    @Field(() => Permissions2RolesCreateWithoutRoleInput, {nullable:false})
    create!: Permissions2RolesCreateWithoutRoleInput;
}

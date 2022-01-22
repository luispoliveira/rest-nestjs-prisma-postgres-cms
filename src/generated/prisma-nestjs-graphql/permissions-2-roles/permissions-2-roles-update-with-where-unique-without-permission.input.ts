import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesUpdateWithoutPermissionInput } from './permissions-2-roles-update-without-permission.input';

@InputType()
export class Permissions2RolesUpdateWithWhereUniqueWithoutPermissionInput {

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;

    @Field(() => Permissions2RolesUpdateWithoutPermissionInput, {nullable:false})
    data!: Permissions2RolesUpdateWithoutPermissionInput;
}

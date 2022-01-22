import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesUpdateWithoutPermissionInput } from './permissions-2-roles-update-without-permission.input';
import { Permissions2RolesCreateWithoutPermissionInput } from './permissions-2-roles-create-without-permission.input';

@InputType()
export class Permissions2RolesUpsertWithWhereUniqueWithoutPermissionInput {

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;

    @Field(() => Permissions2RolesUpdateWithoutPermissionInput, {nullable:false})
    update!: Permissions2RolesUpdateWithoutPermissionInput;

    @Field(() => Permissions2RolesCreateWithoutPermissionInput, {nullable:false})
    create!: Permissions2RolesCreateWithoutPermissionInput;
}

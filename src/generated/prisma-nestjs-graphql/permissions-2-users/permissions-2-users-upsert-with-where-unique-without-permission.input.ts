import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersUpdateWithoutPermissionInput } from './permissions-2-users-update-without-permission.input';
import { Permissions2UsersCreateWithoutPermissionInput } from './permissions-2-users-create-without-permission.input';

@InputType()
export class Permissions2UsersUpsertWithWhereUniqueWithoutPermissionInput {

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;

    @Field(() => Permissions2UsersUpdateWithoutPermissionInput, {nullable:false})
    update!: Permissions2UsersUpdateWithoutPermissionInput;

    @Field(() => Permissions2UsersCreateWithoutPermissionInput, {nullable:false})
    create!: Permissions2UsersCreateWithoutPermissionInput;
}

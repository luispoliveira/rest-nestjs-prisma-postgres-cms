import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersUpdateWithoutPermissionInput } from './permissions-2-users-update-without-permission.input';

@InputType()
export class Permissions2UsersUpdateWithWhereUniqueWithoutPermissionInput {

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;

    @Field(() => Permissions2UsersUpdateWithoutPermissionInput, {nullable:false})
    data!: Permissions2UsersUpdateWithoutPermissionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersCreateWithoutPermissionInput } from './permissions-2-users-create-without-permission.input';

@InputType()
export class Permissions2UsersCreateOrConnectWithoutPermissionInput {

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;

    @Field(() => Permissions2UsersCreateWithoutPermissionInput, {nullable:false})
    create!: Permissions2UsersCreateWithoutPermissionInput;
}

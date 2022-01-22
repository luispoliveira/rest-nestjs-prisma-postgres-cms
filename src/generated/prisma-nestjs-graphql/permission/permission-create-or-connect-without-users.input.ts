import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';

@InputType()
export class PermissionCreateOrConnectWithoutUsersInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutUsersInput, {nullable:false})
    create!: PermissionCreateWithoutUsersInput;
}

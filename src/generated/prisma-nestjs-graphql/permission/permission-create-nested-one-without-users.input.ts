import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';
import { PermissionCreateOrConnectWithoutUsersInput } from './permission-create-or-connect-without-users.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedOneWithoutUsersInput {

    @Field(() => PermissionCreateWithoutUsersInput, {nullable:true})
    create?: PermissionCreateWithoutUsersInput;

    @Field(() => PermissionCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    connect?: PermissionWhereUniqueInput;
}

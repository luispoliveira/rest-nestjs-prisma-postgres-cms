import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';
import { RoleCreateOrConnectWithoutUsersInput } from './role-create-or-connect-without-users.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutUsersInput {

    @Field(() => RoleCreateWithoutUsersInput, {nullable:true})
    create?: RoleCreateWithoutUsersInput;

    @Field(() => RoleCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;
}

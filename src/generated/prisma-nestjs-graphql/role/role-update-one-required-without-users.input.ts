import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';
import { RoleCreateOrConnectWithoutUsersInput } from './role-create-or-connect-without-users.input';
import { RoleUpsertWithoutUsersInput } from './role-upsert-without-users.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutUsersInput } from './role-update-without-users.input';

@InputType()
export class RoleUpdateOneRequiredWithoutUsersInput {

    @Field(() => RoleCreateWithoutUsersInput, {nullable:true})
    create?: RoleCreateWithoutUsersInput;

    @Field(() => RoleCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput;

    @Field(() => RoleUpsertWithoutUsersInput, {nullable:true})
    upsert?: RoleUpsertWithoutUsersInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutUsersInput, {nullable:true})
    update?: RoleUpdateWithoutUsersInput;
}

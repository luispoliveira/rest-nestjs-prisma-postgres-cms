import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';
import { PermissionCreateOrConnectWithoutUsersInput } from './permission-create-or-connect-without-users.input';
import { PermissionUpsertWithoutUsersInput } from './permission-upsert-without-users.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutUsersInput } from './permission-update-without-users.input';

@InputType()
export class PermissionUpdateOneRequiredWithoutUsersInput {

    @Field(() => PermissionCreateWithoutUsersInput, {nullable:true})
    create?: PermissionCreateWithoutUsersInput;

    @Field(() => PermissionCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput;

    @Field(() => PermissionUpsertWithoutUsersInput, {nullable:true})
    upsert?: PermissionUpsertWithoutUsersInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    connect?: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutUsersInput, {nullable:true})
    update?: PermissionUpdateWithoutUsersInput;
}

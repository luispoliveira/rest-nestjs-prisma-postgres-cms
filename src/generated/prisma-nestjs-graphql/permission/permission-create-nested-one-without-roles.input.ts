import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { PermissionCreateOrConnectWithoutRolesInput } from './permission-create-or-connect-without-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedOneWithoutRolesInput {

    @Field(() => PermissionCreateWithoutRolesInput, {nullable:true})
    create?: PermissionCreateWithoutRolesInput;

    @Field(() => PermissionCreateOrConnectWithoutRolesInput, {nullable:true})
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    connect?: PermissionWhereUniqueInput;
}

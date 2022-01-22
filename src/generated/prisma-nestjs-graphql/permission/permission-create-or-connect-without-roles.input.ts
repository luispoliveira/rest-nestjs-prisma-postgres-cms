import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';

@InputType()
export class PermissionCreateOrConnectWithoutRolesInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutRolesInput, {nullable:false})
    create!: PermissionCreateWithoutRolesInput;
}

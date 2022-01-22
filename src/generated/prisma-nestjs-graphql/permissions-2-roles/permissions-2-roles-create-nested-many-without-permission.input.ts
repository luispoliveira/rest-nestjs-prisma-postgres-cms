import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesCreateWithoutPermissionInput } from './permissions-2-roles-create-without-permission.input';
import { Permissions2RolesCreateOrConnectWithoutPermissionInput } from './permissions-2-roles-create-or-connect-without-permission.input';
import { Permissions2RolesCreateManyPermissionInputEnvelope } from './permissions-2-roles-create-many-permission-input-envelope.input';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';

@InputType()
export class Permissions2RolesCreateNestedManyWithoutPermissionInput {

    @Field(() => [Permissions2RolesCreateWithoutPermissionInput], {nullable:true})
    create?: Array<Permissions2RolesCreateWithoutPermissionInput>;

    @Field(() => [Permissions2RolesCreateOrConnectWithoutPermissionInput], {nullable:true})
    connectOrCreate?: Array<Permissions2RolesCreateOrConnectWithoutPermissionInput>;

    @Field(() => Permissions2RolesCreateManyPermissionInputEnvelope, {nullable:true})
    createMany?: Permissions2RolesCreateManyPermissionInputEnvelope;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2RolesWhereUniqueInput>;
}

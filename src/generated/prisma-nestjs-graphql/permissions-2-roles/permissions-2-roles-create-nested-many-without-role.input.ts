import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesCreateWithoutRoleInput } from './permissions-2-roles-create-without-role.input';
import { Permissions2RolesCreateOrConnectWithoutRoleInput } from './permissions-2-roles-create-or-connect-without-role.input';
import { Permissions2RolesCreateManyRoleInputEnvelope } from './permissions-2-roles-create-many-role-input-envelope.input';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';

@InputType()
export class Permissions2RolesCreateNestedManyWithoutRoleInput {

    @Field(() => [Permissions2RolesCreateWithoutRoleInput], {nullable:true})
    create?: Array<Permissions2RolesCreateWithoutRoleInput>;

    @Field(() => [Permissions2RolesCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<Permissions2RolesCreateOrConnectWithoutRoleInput>;

    @Field(() => Permissions2RolesCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: Permissions2RolesCreateManyRoleInputEnvelope;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2RolesWhereUniqueInput>;
}

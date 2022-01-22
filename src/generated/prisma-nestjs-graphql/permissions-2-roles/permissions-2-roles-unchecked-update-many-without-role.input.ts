import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesCreateWithoutRoleInput } from './permissions-2-roles-create-without-role.input';
import { Permissions2RolesCreateOrConnectWithoutRoleInput } from './permissions-2-roles-create-or-connect-without-role.input';
import { Permissions2RolesUpsertWithWhereUniqueWithoutRoleInput } from './permissions-2-roles-upsert-with-where-unique-without-role.input';
import { Permissions2RolesCreateManyRoleInputEnvelope } from './permissions-2-roles-create-many-role-input-envelope.input';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesUpdateWithWhereUniqueWithoutRoleInput } from './permissions-2-roles-update-with-where-unique-without-role.input';
import { Permissions2RolesUpdateManyWithWhereWithoutRoleInput } from './permissions-2-roles-update-many-with-where-without-role.input';
import { Permissions2RolesScalarWhereInput } from './permissions-2-roles-scalar-where.input';

@InputType()
export class Permissions2RolesUncheckedUpdateManyWithoutRoleInput {

    @Field(() => [Permissions2RolesCreateWithoutRoleInput], {nullable:true})
    create?: Array<Permissions2RolesCreateWithoutRoleInput>;

    @Field(() => [Permissions2RolesCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<Permissions2RolesCreateOrConnectWithoutRoleInput>;

    @Field(() => [Permissions2RolesUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    upsert?: Array<Permissions2RolesUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => Permissions2RolesCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: Permissions2RolesCreateManyRoleInputEnvelope;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    set?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    disconnect?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    delete?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    update?: Array<Permissions2RolesUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [Permissions2RolesUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    updateMany?: Array<Permissions2RolesUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [Permissions2RolesScalarWhereInput], {nullable:true})
    deleteMany?: Array<Permissions2RolesScalarWhereInput>;
}

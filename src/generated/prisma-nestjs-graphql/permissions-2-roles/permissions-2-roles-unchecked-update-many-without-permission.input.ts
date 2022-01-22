import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesCreateWithoutPermissionInput } from './permissions-2-roles-create-without-permission.input';
import { Permissions2RolesCreateOrConnectWithoutPermissionInput } from './permissions-2-roles-create-or-connect-without-permission.input';
import { Permissions2RolesUpsertWithWhereUniqueWithoutPermissionInput } from './permissions-2-roles-upsert-with-where-unique-without-permission.input';
import { Permissions2RolesCreateManyPermissionInputEnvelope } from './permissions-2-roles-create-many-permission-input-envelope.input';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesUpdateWithWhereUniqueWithoutPermissionInput } from './permissions-2-roles-update-with-where-unique-without-permission.input';
import { Permissions2RolesUpdateManyWithWhereWithoutPermissionInput } from './permissions-2-roles-update-many-with-where-without-permission.input';
import { Permissions2RolesScalarWhereInput } from './permissions-2-roles-scalar-where.input';

@InputType()
export class Permissions2RolesUncheckedUpdateManyWithoutPermissionInput {

    @Field(() => [Permissions2RolesCreateWithoutPermissionInput], {nullable:true})
    create?: Array<Permissions2RolesCreateWithoutPermissionInput>;

    @Field(() => [Permissions2RolesCreateOrConnectWithoutPermissionInput], {nullable:true})
    connectOrCreate?: Array<Permissions2RolesCreateOrConnectWithoutPermissionInput>;

    @Field(() => [Permissions2RolesUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    upsert?: Array<Permissions2RolesUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => Permissions2RolesCreateManyPermissionInputEnvelope, {nullable:true})
    createMany?: Permissions2RolesCreateManyPermissionInputEnvelope;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    set?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    disconnect?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    delete?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2RolesWhereUniqueInput>;

    @Field(() => [Permissions2RolesUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    update?: Array<Permissions2RolesUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [Permissions2RolesUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    updateMany?: Array<Permissions2RolesUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [Permissions2RolesScalarWhereInput], {nullable:true})
    deleteMany?: Array<Permissions2RolesScalarWhereInput>;
}

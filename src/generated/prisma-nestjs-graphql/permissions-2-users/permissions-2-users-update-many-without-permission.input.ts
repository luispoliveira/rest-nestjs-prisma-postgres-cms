import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersCreateWithoutPermissionInput } from './permissions-2-users-create-without-permission.input';
import { Permissions2UsersCreateOrConnectWithoutPermissionInput } from './permissions-2-users-create-or-connect-without-permission.input';
import { Permissions2UsersUpsertWithWhereUniqueWithoutPermissionInput } from './permissions-2-users-upsert-with-where-unique-without-permission.input';
import { Permissions2UsersCreateManyPermissionInputEnvelope } from './permissions-2-users-create-many-permission-input-envelope.input';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersUpdateWithWhereUniqueWithoutPermissionInput } from './permissions-2-users-update-with-where-unique-without-permission.input';
import { Permissions2UsersUpdateManyWithWhereWithoutPermissionInput } from './permissions-2-users-update-many-with-where-without-permission.input';
import { Permissions2UsersScalarWhereInput } from './permissions-2-users-scalar-where.input';

@InputType()
export class Permissions2UsersUpdateManyWithoutPermissionInput {

    @Field(() => [Permissions2UsersCreateWithoutPermissionInput], {nullable:true})
    create?: Array<Permissions2UsersCreateWithoutPermissionInput>;

    @Field(() => [Permissions2UsersCreateOrConnectWithoutPermissionInput], {nullable:true})
    connectOrCreate?: Array<Permissions2UsersCreateOrConnectWithoutPermissionInput>;

    @Field(() => [Permissions2UsersUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    upsert?: Array<Permissions2UsersUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => Permissions2UsersCreateManyPermissionInputEnvelope, {nullable:true})
    createMany?: Permissions2UsersCreateManyPermissionInputEnvelope;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    set?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    disconnect?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    delete?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    update?: Array<Permissions2UsersUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [Permissions2UsersUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    updateMany?: Array<Permissions2UsersUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [Permissions2UsersScalarWhereInput], {nullable:true})
    deleteMany?: Array<Permissions2UsersScalarWhereInput>;
}

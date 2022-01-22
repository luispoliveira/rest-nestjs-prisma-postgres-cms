import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersCreateWithoutUserInput } from './permissions-2-users-create-without-user.input';
import { Permissions2UsersCreateOrConnectWithoutUserInput } from './permissions-2-users-create-or-connect-without-user.input';
import { Permissions2UsersUpsertWithWhereUniqueWithoutUserInput } from './permissions-2-users-upsert-with-where-unique-without-user.input';
import { Permissions2UsersCreateManyUserInputEnvelope } from './permissions-2-users-create-many-user-input-envelope.input';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersUpdateWithWhereUniqueWithoutUserInput } from './permissions-2-users-update-with-where-unique-without-user.input';
import { Permissions2UsersUpdateManyWithWhereWithoutUserInput } from './permissions-2-users-update-many-with-where-without-user.input';
import { Permissions2UsersScalarWhereInput } from './permissions-2-users-scalar-where.input';

@InputType()
export class Permissions2UsersUpdateManyWithoutUserInput {

    @Field(() => [Permissions2UsersCreateWithoutUserInput], {nullable:true})
    create?: Array<Permissions2UsersCreateWithoutUserInput>;

    @Field(() => [Permissions2UsersCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<Permissions2UsersCreateOrConnectWithoutUserInput>;

    @Field(() => [Permissions2UsersUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<Permissions2UsersUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => Permissions2UsersCreateManyUserInputEnvelope, {nullable:true})
    createMany?: Permissions2UsersCreateManyUserInputEnvelope;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    set?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    disconnect?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    delete?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2UsersWhereUniqueInput>;

    @Field(() => [Permissions2UsersUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<Permissions2UsersUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [Permissions2UsersUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<Permissions2UsersUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [Permissions2UsersScalarWhereInput], {nullable:true})
    deleteMany?: Array<Permissions2UsersScalarWhereInput>;
}

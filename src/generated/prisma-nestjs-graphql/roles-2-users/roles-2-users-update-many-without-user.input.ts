import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersCreateWithoutUserInput } from './roles-2-users-create-without-user.input';
import { Roles2UsersCreateOrConnectWithoutUserInput } from './roles-2-users-create-or-connect-without-user.input';
import { Roles2UsersUpsertWithWhereUniqueWithoutUserInput } from './roles-2-users-upsert-with-where-unique-without-user.input';
import { Roles2UsersCreateManyUserInputEnvelope } from './roles-2-users-create-many-user-input-envelope.input';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersUpdateWithWhereUniqueWithoutUserInput } from './roles-2-users-update-with-where-unique-without-user.input';
import { Roles2UsersUpdateManyWithWhereWithoutUserInput } from './roles-2-users-update-many-with-where-without-user.input';
import { Roles2UsersScalarWhereInput } from './roles-2-users-scalar-where.input';

@InputType()
export class Roles2UsersUpdateManyWithoutUserInput {

    @Field(() => [Roles2UsersCreateWithoutUserInput], {nullable:true})
    create?: Array<Roles2UsersCreateWithoutUserInput>;

    @Field(() => [Roles2UsersCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<Roles2UsersCreateOrConnectWithoutUserInput>;

    @Field(() => [Roles2UsersUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<Roles2UsersUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => Roles2UsersCreateManyUserInputEnvelope, {nullable:true})
    createMany?: Roles2UsersCreateManyUserInputEnvelope;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    set?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    disconnect?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    delete?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<Roles2UsersUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [Roles2UsersUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<Roles2UsersUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [Roles2UsersScalarWhereInput], {nullable:true})
    deleteMany?: Array<Roles2UsersScalarWhereInput>;
}

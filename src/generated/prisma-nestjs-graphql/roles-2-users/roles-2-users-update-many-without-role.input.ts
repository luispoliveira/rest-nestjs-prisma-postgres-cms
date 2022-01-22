import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersCreateWithoutRoleInput } from './roles-2-users-create-without-role.input';
import { Roles2UsersCreateOrConnectWithoutRoleInput } from './roles-2-users-create-or-connect-without-role.input';
import { Roles2UsersUpsertWithWhereUniqueWithoutRoleInput } from './roles-2-users-upsert-with-where-unique-without-role.input';
import { Roles2UsersCreateManyRoleInputEnvelope } from './roles-2-users-create-many-role-input-envelope.input';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersUpdateWithWhereUniqueWithoutRoleInput } from './roles-2-users-update-with-where-unique-without-role.input';
import { Roles2UsersUpdateManyWithWhereWithoutRoleInput } from './roles-2-users-update-many-with-where-without-role.input';
import { Roles2UsersScalarWhereInput } from './roles-2-users-scalar-where.input';

@InputType()
export class Roles2UsersUpdateManyWithoutRoleInput {

    @Field(() => [Roles2UsersCreateWithoutRoleInput], {nullable:true})
    create?: Array<Roles2UsersCreateWithoutRoleInput>;

    @Field(() => [Roles2UsersCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<Roles2UsersCreateOrConnectWithoutRoleInput>;

    @Field(() => [Roles2UsersUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    upsert?: Array<Roles2UsersUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => Roles2UsersCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: Roles2UsersCreateManyRoleInputEnvelope;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    set?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    disconnect?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    delete?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Roles2UsersWhereUniqueInput>;

    @Field(() => [Roles2UsersUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    update?: Array<Roles2UsersUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [Roles2UsersUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    updateMany?: Array<Roles2UsersUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [Roles2UsersScalarWhereInput], {nullable:true})
    deleteMany?: Array<Roles2UsersScalarWhereInput>;
}

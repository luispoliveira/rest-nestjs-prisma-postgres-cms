import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersCreateWithoutRoleInput } from './roles-2-users-create-without-role.input';
import { Roles2UsersCreateOrConnectWithoutRoleInput } from './roles-2-users-create-or-connect-without-role.input';
import { Roles2UsersCreateManyRoleInputEnvelope } from './roles-2-users-create-many-role-input-envelope.input';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';

@InputType()
export class Roles2UsersUncheckedCreateNestedManyWithoutRoleInput {

    @Field(() => [Roles2UsersCreateWithoutRoleInput], {nullable:true})
    create?: Array<Roles2UsersCreateWithoutRoleInput>;

    @Field(() => [Roles2UsersCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<Roles2UsersCreateOrConnectWithoutRoleInput>;

    @Field(() => Roles2UsersCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: Roles2UsersCreateManyRoleInputEnvelope;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Roles2UsersWhereUniqueInput>;
}

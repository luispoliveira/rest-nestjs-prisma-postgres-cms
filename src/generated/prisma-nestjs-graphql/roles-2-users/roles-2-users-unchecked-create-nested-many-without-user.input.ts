import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersCreateWithoutUserInput } from './roles-2-users-create-without-user.input';
import { Roles2UsersCreateOrConnectWithoutUserInput } from './roles-2-users-create-or-connect-without-user.input';
import { Roles2UsersCreateManyUserInputEnvelope } from './roles-2-users-create-many-user-input-envelope.input';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';

@InputType()
export class Roles2UsersUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [Roles2UsersCreateWithoutUserInput], {nullable:true})
    create?: Array<Roles2UsersCreateWithoutUserInput>;

    @Field(() => [Roles2UsersCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<Roles2UsersCreateOrConnectWithoutUserInput>;

    @Field(() => Roles2UsersCreateManyUserInputEnvelope, {nullable:true})
    createMany?: Roles2UsersCreateManyUserInputEnvelope;

    @Field(() => [Roles2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Roles2UsersWhereUniqueInput>;
}

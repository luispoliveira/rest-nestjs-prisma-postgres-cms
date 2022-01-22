import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersCreateWithoutUserInput } from './permissions-2-users-create-without-user.input';
import { Permissions2UsersCreateOrConnectWithoutUserInput } from './permissions-2-users-create-or-connect-without-user.input';
import { Permissions2UsersCreateManyUserInputEnvelope } from './permissions-2-users-create-many-user-input-envelope.input';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';

@InputType()
export class Permissions2UsersUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [Permissions2UsersCreateWithoutUserInput], {nullable:true})
    create?: Array<Permissions2UsersCreateWithoutUserInput>;

    @Field(() => [Permissions2UsersCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<Permissions2UsersCreateOrConnectWithoutUserInput>;

    @Field(() => Permissions2UsersCreateManyUserInputEnvelope, {nullable:true})
    createMany?: Permissions2UsersCreateManyUserInputEnvelope;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2UsersWhereUniqueInput>;
}

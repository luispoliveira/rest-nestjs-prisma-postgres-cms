import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersCreateWithoutPermissionInput } from './permissions-2-users-create-without-permission.input';
import { Permissions2UsersCreateOrConnectWithoutPermissionInput } from './permissions-2-users-create-or-connect-without-permission.input';
import { Permissions2UsersCreateManyPermissionInputEnvelope } from './permissions-2-users-create-many-permission-input-envelope.input';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';

@InputType()
export class Permissions2UsersUncheckedCreateNestedManyWithoutPermissionInput {

    @Field(() => [Permissions2UsersCreateWithoutPermissionInput], {nullable:true})
    create?: Array<Permissions2UsersCreateWithoutPermissionInput>;

    @Field(() => [Permissions2UsersCreateOrConnectWithoutPermissionInput], {nullable:true})
    connectOrCreate?: Array<Permissions2UsersCreateOrConnectWithoutPermissionInput>;

    @Field(() => Permissions2UsersCreateManyPermissionInputEnvelope, {nullable:true})
    createMany?: Permissions2UsersCreateManyPermissionInputEnvelope;

    @Field(() => [Permissions2UsersWhereUniqueInput], {nullable:true})
    connect?: Array<Permissions2UsersWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersUpdateWithoutUserInput } from './permissions-2-users-update-without-user.input';
import { Permissions2UsersCreateWithoutUserInput } from './permissions-2-users-create-without-user.input';

@InputType()
export class Permissions2UsersUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;

    @Field(() => Permissions2UsersUpdateWithoutUserInput, {nullable:false})
    update!: Permissions2UsersUpdateWithoutUserInput;

    @Field(() => Permissions2UsersCreateWithoutUserInput, {nullable:false})
    create!: Permissions2UsersCreateWithoutUserInput;
}

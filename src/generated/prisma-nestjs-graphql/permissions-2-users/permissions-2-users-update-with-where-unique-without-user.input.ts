import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersUpdateWithoutUserInput } from './permissions-2-users-update-without-user.input';

@InputType()
export class Permissions2UsersUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;

    @Field(() => Permissions2UsersUpdateWithoutUserInput, {nullable:false})
    data!: Permissions2UsersUpdateWithoutUserInput;
}

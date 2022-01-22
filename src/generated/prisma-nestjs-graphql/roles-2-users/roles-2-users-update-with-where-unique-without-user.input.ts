import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersUpdateWithoutUserInput } from './roles-2-users-update-without-user.input';

@InputType()
export class Roles2UsersUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;

    @Field(() => Roles2UsersUpdateWithoutUserInput, {nullable:false})
    data!: Roles2UsersUpdateWithoutUserInput;
}

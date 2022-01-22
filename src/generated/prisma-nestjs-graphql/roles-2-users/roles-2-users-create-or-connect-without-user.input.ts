import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersCreateWithoutUserInput } from './roles-2-users-create-without-user.input';

@InputType()
export class Roles2UsersCreateOrConnectWithoutUserInput {

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;

    @Field(() => Roles2UsersCreateWithoutUserInput, {nullable:false})
    create!: Roles2UsersCreateWithoutUserInput;
}

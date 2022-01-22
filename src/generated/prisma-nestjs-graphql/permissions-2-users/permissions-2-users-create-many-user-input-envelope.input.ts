import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersCreateManyUserInput } from './permissions-2-users-create-many-user.input';

@InputType()
export class Permissions2UsersCreateManyUserInputEnvelope {

    @Field(() => [Permissions2UsersCreateManyUserInput], {nullable:false})
    data!: Array<Permissions2UsersCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

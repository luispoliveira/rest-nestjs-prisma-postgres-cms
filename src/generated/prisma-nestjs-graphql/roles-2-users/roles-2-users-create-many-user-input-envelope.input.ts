import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersCreateManyUserInput } from './roles-2-users-create-many-user.input';

@InputType()
export class Roles2UsersCreateManyUserInputEnvelope {

    @Field(() => [Roles2UsersCreateManyUserInput], {nullable:false})
    data!: Array<Roles2UsersCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

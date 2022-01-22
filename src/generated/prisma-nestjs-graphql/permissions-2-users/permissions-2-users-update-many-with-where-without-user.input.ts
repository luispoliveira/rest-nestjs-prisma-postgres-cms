import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersScalarWhereInput } from './permissions-2-users-scalar-where.input';
import { Permissions2UsersUpdateManyMutationInput } from './permissions-2-users-update-many-mutation.input';

@InputType()
export class Permissions2UsersUpdateManyWithWhereWithoutUserInput {

    @Field(() => Permissions2UsersScalarWhereInput, {nullable:false})
    where!: Permissions2UsersScalarWhereInput;

    @Field(() => Permissions2UsersUpdateManyMutationInput, {nullable:false})
    data!: Permissions2UsersUpdateManyMutationInput;
}

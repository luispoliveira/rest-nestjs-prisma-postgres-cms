import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersScalarWhereInput } from './roles-2-users-scalar-where.input';
import { Roles2UsersUpdateManyMutationInput } from './roles-2-users-update-many-mutation.input';

@InputType()
export class Roles2UsersUpdateManyWithWhereWithoutRoleInput {

    @Field(() => Roles2UsersScalarWhereInput, {nullable:false})
    where!: Roles2UsersScalarWhereInput;

    @Field(() => Roles2UsersUpdateManyMutationInput, {nullable:false})
    data!: Roles2UsersUpdateManyMutationInput;
}

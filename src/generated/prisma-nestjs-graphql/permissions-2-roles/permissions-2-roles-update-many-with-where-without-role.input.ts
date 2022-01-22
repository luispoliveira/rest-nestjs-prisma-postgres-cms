import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesScalarWhereInput } from './permissions-2-roles-scalar-where.input';
import { Permissions2RolesUpdateManyMutationInput } from './permissions-2-roles-update-many-mutation.input';

@InputType()
export class Permissions2RolesUpdateManyWithWhereWithoutRoleInput {

    @Field(() => Permissions2RolesScalarWhereInput, {nullable:false})
    where!: Permissions2RolesScalarWhereInput;

    @Field(() => Permissions2RolesUpdateManyMutationInput, {nullable:false})
    data!: Permissions2RolesUpdateManyMutationInput;
}

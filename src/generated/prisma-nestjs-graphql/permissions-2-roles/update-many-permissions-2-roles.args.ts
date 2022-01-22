import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesUpdateManyMutationInput } from './permissions-2-roles-update-many-mutation.input';
import { Permissions2RolesWhereInput } from './permissions-2-roles-where.input';

@ArgsType()
export class UpdateManyPermissions2RolesArgs {

    @Field(() => Permissions2RolesUpdateManyMutationInput, {nullable:false})
    data!: Permissions2RolesUpdateManyMutationInput;

    @Field(() => Permissions2RolesWhereInput, {nullable:true})
    where?: Permissions2RolesWhereInput;
}

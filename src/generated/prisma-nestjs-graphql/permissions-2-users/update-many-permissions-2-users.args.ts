import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersUpdateManyMutationInput } from './permissions-2-users-update-many-mutation.input';
import { Permissions2UsersWhereInput } from './permissions-2-users-where.input';

@ArgsType()
export class UpdateManyPermissions2UsersArgs {

    @Field(() => Permissions2UsersUpdateManyMutationInput, {nullable:false})
    data!: Permissions2UsersUpdateManyMutationInput;

    @Field(() => Permissions2UsersWhereInput, {nullable:true})
    where?: Permissions2UsersWhereInput;
}

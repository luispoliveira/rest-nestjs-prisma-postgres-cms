import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersUpdateManyMutationInput } from './roles-2-users-update-many-mutation.input';
import { Roles2UsersWhereInput } from './roles-2-users-where.input';

@ArgsType()
export class UpdateManyRoles2UsersArgs {

    @Field(() => Roles2UsersUpdateManyMutationInput, {nullable:false})
    data!: Roles2UsersUpdateManyMutationInput;

    @Field(() => Roles2UsersWhereInput, {nullable:true})
    where?: Roles2UsersWhereInput;
}

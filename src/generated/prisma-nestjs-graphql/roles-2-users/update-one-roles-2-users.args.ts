import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersUpdateInput } from './roles-2-users-update.input';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';

@ArgsType()
export class UpdateOneRoles2UsersArgs {

    @Field(() => Roles2UsersUpdateInput, {nullable:false})
    data!: Roles2UsersUpdateInput;

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;
}

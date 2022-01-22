import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersUpdateInput } from './permissions-2-users-update.input';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';

@ArgsType()
export class UpdateOnePermissions2UsersArgs {

    @Field(() => Permissions2UsersUpdateInput, {nullable:false})
    data!: Permissions2UsersUpdateInput;

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;
}

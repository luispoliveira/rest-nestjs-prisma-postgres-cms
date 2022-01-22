import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Permissions2UsersCreateInput } from './permissions-2-users-create.input';
import { Permissions2UsersUpdateInput } from './permissions-2-users-update.input';

@ArgsType()
export class UpsertOnePermissions2UsersArgs {

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;

    @Field(() => Permissions2UsersCreateInput, {nullable:false})
    create!: Permissions2UsersCreateInput;

    @Field(() => Permissions2UsersUpdateInput, {nullable:false})
    update!: Permissions2UsersUpdateInput;
}

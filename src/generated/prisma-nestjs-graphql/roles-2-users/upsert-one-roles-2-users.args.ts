import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Roles2UsersCreateInput } from './roles-2-users-create.input';
import { Roles2UsersUpdateInput } from './roles-2-users-update.input';

@ArgsType()
export class UpsertOneRoles2UsersArgs {

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;

    @Field(() => Roles2UsersCreateInput, {nullable:false})
    create!: Roles2UsersCreateInput;

    @Field(() => Roles2UsersUpdateInput, {nullable:false})
    update!: Roles2UsersUpdateInput;
}

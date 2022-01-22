import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Permissions2RolesCreateInput } from './permissions-2-roles-create.input';
import { Permissions2RolesUpdateInput } from './permissions-2-roles-update.input';

@ArgsType()
export class UpsertOnePermissions2RolesArgs {

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;

    @Field(() => Permissions2RolesCreateInput, {nullable:false})
    create!: Permissions2RolesCreateInput;

    @Field(() => Permissions2RolesUpdateInput, {nullable:false})
    update!: Permissions2RolesUpdateInput;
}

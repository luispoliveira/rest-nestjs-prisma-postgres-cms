import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesUpdateInput } from './permissions-2-roles-update.input';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';

@ArgsType()
export class UpdateOnePermissions2RolesArgs {

    @Field(() => Permissions2RolesUpdateInput, {nullable:false})
    data!: Permissions2RolesUpdateInput;

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;
}

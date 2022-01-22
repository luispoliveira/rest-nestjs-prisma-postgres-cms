import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';

@ArgsType()
export class DeleteOnePermissions2RolesArgs {

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:false})
    where!: Permissions2RolesWhereUniqueInput;
}

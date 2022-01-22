import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesWhereInput } from './permissions-2-roles-where.input';

@ArgsType()
export class DeleteManyPermissions2RolesArgs {

    @Field(() => Permissions2RolesWhereInput, {nullable:true})
    where?: Permissions2RolesWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesCreateInput } from './permissions-2-roles-create.input';

@ArgsType()
export class CreateOnePermissions2RolesArgs {

    @Field(() => Permissions2RolesCreateInput, {nullable:false})
    data!: Permissions2RolesCreateInput;
}

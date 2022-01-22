import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersCreateInput } from './permissions-2-users-create.input';

@ArgsType()
export class CreateOnePermissions2UsersArgs {

    @Field(() => Permissions2UsersCreateInput, {nullable:false})
    data!: Permissions2UsersCreateInput;
}

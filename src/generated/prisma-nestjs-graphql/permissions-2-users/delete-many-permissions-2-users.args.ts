import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersWhereInput } from './permissions-2-users-where.input';

@ArgsType()
export class DeleteManyPermissions2UsersArgs {

    @Field(() => Permissions2UsersWhereInput, {nullable:true})
    where?: Permissions2UsersWhereInput;
}

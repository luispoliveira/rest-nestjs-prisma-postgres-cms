import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';

@ArgsType()
export class DeleteOnePermissions2UsersArgs {

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:false})
    where!: Permissions2UsersWhereUniqueInput;
}

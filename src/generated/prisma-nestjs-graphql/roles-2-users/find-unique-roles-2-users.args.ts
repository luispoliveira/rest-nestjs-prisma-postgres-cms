import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';

@ArgsType()
export class FindUniqueRoles2UsersArgs {

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:false})
    where!: Roles2UsersWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersWhereInput } from './roles-2-users-where.input';

@ArgsType()
export class DeleteManyRoles2UsersArgs {

    @Field(() => Roles2UsersWhereInput, {nullable:true})
    where?: Roles2UsersWhereInput;
}

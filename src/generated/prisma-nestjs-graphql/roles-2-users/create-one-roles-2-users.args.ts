import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersCreateInput } from './roles-2-users-create.input';

@ArgsType()
export class CreateOneRoles2UsersArgs {

    @Field(() => Roles2UsersCreateInput, {nullable:false})
    data!: Roles2UsersCreateInput;
}

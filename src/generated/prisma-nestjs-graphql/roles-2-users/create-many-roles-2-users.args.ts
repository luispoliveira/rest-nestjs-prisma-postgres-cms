import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersCreateManyInput } from './roles-2-users-create-many.input';

@ArgsType()
export class CreateManyRoles2UsersArgs {

    @Field(() => [Roles2UsersCreateManyInput], {nullable:false})
    data!: Array<Roles2UsersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

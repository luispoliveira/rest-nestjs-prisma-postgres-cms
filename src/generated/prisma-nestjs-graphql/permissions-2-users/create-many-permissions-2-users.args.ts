import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersCreateManyInput } from './permissions-2-users-create-many.input';

@ArgsType()
export class CreateManyPermissions2UsersArgs {

    @Field(() => [Permissions2UsersCreateManyInput], {nullable:false})
    data!: Array<Permissions2UsersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersCreateManyRoleInput } from './roles-2-users-create-many-role.input';

@InputType()
export class Roles2UsersCreateManyRoleInputEnvelope {

    @Field(() => [Roles2UsersCreateManyRoleInput], {nullable:false})
    data!: Array<Roles2UsersCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

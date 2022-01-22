import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesCreateManyRoleInput } from './permissions-2-roles-create-many-role.input';

@InputType()
export class Permissions2RolesCreateManyRoleInputEnvelope {

    @Field(() => [Permissions2RolesCreateManyRoleInput], {nullable:false})
    data!: Array<Permissions2RolesCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

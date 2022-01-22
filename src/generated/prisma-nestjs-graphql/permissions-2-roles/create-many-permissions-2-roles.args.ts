import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesCreateManyInput } from './permissions-2-roles-create-many.input';

@ArgsType()
export class CreateManyPermissions2RolesArgs {

    @Field(() => [Permissions2RolesCreateManyInput], {nullable:false})
    data!: Array<Permissions2RolesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

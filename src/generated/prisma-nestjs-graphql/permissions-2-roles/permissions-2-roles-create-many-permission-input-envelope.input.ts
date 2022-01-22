import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesCreateManyPermissionInput } from './permissions-2-roles-create-many-permission.input';

@InputType()
export class Permissions2RolesCreateManyPermissionInputEnvelope {

    @Field(() => [Permissions2RolesCreateManyPermissionInput], {nullable:false})
    data!: Array<Permissions2RolesCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

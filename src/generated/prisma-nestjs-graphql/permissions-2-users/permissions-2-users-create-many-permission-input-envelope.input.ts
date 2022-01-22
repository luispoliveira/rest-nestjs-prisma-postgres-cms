import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersCreateManyPermissionInput } from './permissions-2-users-create-many-permission.input';

@InputType()
export class Permissions2UsersCreateManyPermissionInputEnvelope {

    @Field(() => [Permissions2UsersCreateManyPermissionInput], {nullable:false})
    data!: Array<Permissions2UsersCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

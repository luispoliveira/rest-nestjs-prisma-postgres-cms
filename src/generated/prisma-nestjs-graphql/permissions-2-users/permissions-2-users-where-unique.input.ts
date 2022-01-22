import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersPermissionIdUserIdCompoundUniqueInput } from './permissions-2-users-permission-id-user-id-compound-unique.input';

@InputType()
export class Permissions2UsersWhereUniqueInput {

    @Field(() => Permissions2UsersPermissionIdUserIdCompoundUniqueInput, {nullable:true})
    permissionId_userId?: Permissions2UsersPermissionIdUserIdCompoundUniqueInput;
}

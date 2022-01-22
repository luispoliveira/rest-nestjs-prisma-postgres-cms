import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersRoleIdUserIdCompoundUniqueInput } from './roles-2-users-role-id-user-id-compound-unique.input';

@InputType()
export class Roles2UsersWhereUniqueInput {

    @Field(() => Roles2UsersRoleIdUserIdCompoundUniqueInput, {nullable:true})
    roleId_userId?: Roles2UsersRoleIdUserIdCompoundUniqueInput;
}

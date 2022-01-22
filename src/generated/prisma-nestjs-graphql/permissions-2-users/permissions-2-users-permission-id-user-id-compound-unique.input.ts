import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class Permissions2UsersPermissionIdUserIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;
}

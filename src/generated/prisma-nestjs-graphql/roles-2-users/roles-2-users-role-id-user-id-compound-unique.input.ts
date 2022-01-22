import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class Roles2UsersRoleIdUserIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;
}

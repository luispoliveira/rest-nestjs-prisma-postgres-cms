import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Permissions2RolesSumAggregate {

    @Field(() => Int, {nullable:true})
    permissionId?: number;

    @Field(() => Int, {nullable:true})
    roleId?: number;
}

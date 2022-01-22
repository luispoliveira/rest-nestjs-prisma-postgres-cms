import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Permissions2UsersSumAggregate {

    @Field(() => Int, {nullable:true})
    permissionId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}

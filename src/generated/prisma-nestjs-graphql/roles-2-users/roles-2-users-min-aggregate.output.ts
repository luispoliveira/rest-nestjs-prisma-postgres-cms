import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Roles2UsersMinAggregate {

    @Field(() => Int, {nullable:true})
    roleId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}
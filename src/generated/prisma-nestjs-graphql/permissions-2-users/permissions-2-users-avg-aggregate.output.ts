import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Permissions2UsersAvgAggregate {

    @Field(() => Float, {nullable:true})
    permissionId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;
}

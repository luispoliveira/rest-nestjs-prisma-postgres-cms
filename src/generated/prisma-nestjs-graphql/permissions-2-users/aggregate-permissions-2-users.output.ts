import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Permissions2UsersCountAggregate } from './permissions-2-users-count-aggregate.output';
import { Permissions2UsersAvgAggregate } from './permissions-2-users-avg-aggregate.output';
import { Permissions2UsersSumAggregate } from './permissions-2-users-sum-aggregate.output';
import { Permissions2UsersMinAggregate } from './permissions-2-users-min-aggregate.output';
import { Permissions2UsersMaxAggregate } from './permissions-2-users-max-aggregate.output';

@ObjectType()
export class AggregatePermissions2Users {

    @Field(() => Permissions2UsersCountAggregate, {nullable:true})
    _count?: Permissions2UsersCountAggregate;

    @Field(() => Permissions2UsersAvgAggregate, {nullable:true})
    _avg?: Permissions2UsersAvgAggregate;

    @Field(() => Permissions2UsersSumAggregate, {nullable:true})
    _sum?: Permissions2UsersSumAggregate;

    @Field(() => Permissions2UsersMinAggregate, {nullable:true})
    _min?: Permissions2UsersMinAggregate;

    @Field(() => Permissions2UsersMaxAggregate, {nullable:true})
    _max?: Permissions2UsersMaxAggregate;
}

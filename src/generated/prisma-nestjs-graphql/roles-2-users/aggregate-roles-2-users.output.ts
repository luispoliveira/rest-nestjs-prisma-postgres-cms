import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Roles2UsersCountAggregate } from './roles-2-users-count-aggregate.output';
import { Roles2UsersAvgAggregate } from './roles-2-users-avg-aggregate.output';
import { Roles2UsersSumAggregate } from './roles-2-users-sum-aggregate.output';
import { Roles2UsersMinAggregate } from './roles-2-users-min-aggregate.output';
import { Roles2UsersMaxAggregate } from './roles-2-users-max-aggregate.output';

@ObjectType()
export class AggregateRoles2Users {

    @Field(() => Roles2UsersCountAggregate, {nullable:true})
    _count?: Roles2UsersCountAggregate;

    @Field(() => Roles2UsersAvgAggregate, {nullable:true})
    _avg?: Roles2UsersAvgAggregate;

    @Field(() => Roles2UsersSumAggregate, {nullable:true})
    _sum?: Roles2UsersSumAggregate;

    @Field(() => Roles2UsersMinAggregate, {nullable:true})
    _min?: Roles2UsersMinAggregate;

    @Field(() => Roles2UsersMaxAggregate, {nullable:true})
    _max?: Roles2UsersMaxAggregate;
}

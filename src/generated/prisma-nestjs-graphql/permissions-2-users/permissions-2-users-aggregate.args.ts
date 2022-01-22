import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersWhereInput } from './permissions-2-users-where.input';
import { Permissions2UsersOrderByWithRelationInput } from './permissions-2-users-order-by-with-relation.input';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Permissions2UsersCountAggregateInput } from './permissions-2-users-count-aggregate.input';
import { Permissions2UsersAvgAggregateInput } from './permissions-2-users-avg-aggregate.input';
import { Permissions2UsersSumAggregateInput } from './permissions-2-users-sum-aggregate.input';
import { Permissions2UsersMinAggregateInput } from './permissions-2-users-min-aggregate.input';
import { Permissions2UsersMaxAggregateInput } from './permissions-2-users-max-aggregate.input';

@ArgsType()
export class Permissions2UsersAggregateArgs {

    @Field(() => Permissions2UsersWhereInput, {nullable:true})
    where?: Permissions2UsersWhereInput;

    @Field(() => [Permissions2UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<Permissions2UsersOrderByWithRelationInput>;

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:true})
    cursor?: Permissions2UsersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => Permissions2UsersCountAggregateInput, {nullable:true})
    _count?: Permissions2UsersCountAggregateInput;

    @Field(() => Permissions2UsersAvgAggregateInput, {nullable:true})
    _avg?: Permissions2UsersAvgAggregateInput;

    @Field(() => Permissions2UsersSumAggregateInput, {nullable:true})
    _sum?: Permissions2UsersSumAggregateInput;

    @Field(() => Permissions2UsersMinAggregateInput, {nullable:true})
    _min?: Permissions2UsersMinAggregateInput;

    @Field(() => Permissions2UsersMaxAggregateInput, {nullable:true})
    _max?: Permissions2UsersMaxAggregateInput;
}

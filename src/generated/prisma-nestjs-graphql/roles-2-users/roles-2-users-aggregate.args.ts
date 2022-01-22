import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersWhereInput } from './roles-2-users-where.input';
import { Roles2UsersOrderByWithRelationInput } from './roles-2-users-order-by-with-relation.input';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Roles2UsersCountAggregateInput } from './roles-2-users-count-aggregate.input';
import { Roles2UsersAvgAggregateInput } from './roles-2-users-avg-aggregate.input';
import { Roles2UsersSumAggregateInput } from './roles-2-users-sum-aggregate.input';
import { Roles2UsersMinAggregateInput } from './roles-2-users-min-aggregate.input';
import { Roles2UsersMaxAggregateInput } from './roles-2-users-max-aggregate.input';

@ArgsType()
export class Roles2UsersAggregateArgs {

    @Field(() => Roles2UsersWhereInput, {nullable:true})
    where?: Roles2UsersWhereInput;

    @Field(() => [Roles2UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<Roles2UsersOrderByWithRelationInput>;

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:true})
    cursor?: Roles2UsersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => Roles2UsersCountAggregateInput, {nullable:true})
    _count?: Roles2UsersCountAggregateInput;

    @Field(() => Roles2UsersAvgAggregateInput, {nullable:true})
    _avg?: Roles2UsersAvgAggregateInput;

    @Field(() => Roles2UsersSumAggregateInput, {nullable:true})
    _sum?: Roles2UsersSumAggregateInput;

    @Field(() => Roles2UsersMinAggregateInput, {nullable:true})
    _min?: Roles2UsersMinAggregateInput;

    @Field(() => Roles2UsersMaxAggregateInput, {nullable:true})
    _max?: Roles2UsersMaxAggregateInput;
}

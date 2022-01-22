import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { Permissions2UsersCountOrderByAggregateInput } from './permissions-2-users-count-order-by-aggregate.input';
import { Permissions2UsersAvgOrderByAggregateInput } from './permissions-2-users-avg-order-by-aggregate.input';
import { Permissions2UsersMaxOrderByAggregateInput } from './permissions-2-users-max-order-by-aggregate.input';
import { Permissions2UsersMinOrderByAggregateInput } from './permissions-2-users-min-order-by-aggregate.input';
import { Permissions2UsersSumOrderByAggregateInput } from './permissions-2-users-sum-order-by-aggregate.input';

@InputType()
export class Permissions2UsersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    createdBy?: keyof typeof SortOrder;

    @HideField()
    updatedBy?: keyof typeof SortOrder;

    @Field(() => Permissions2UsersCountOrderByAggregateInput, {nullable:true})
    _count?: Permissions2UsersCountOrderByAggregateInput;

    @Field(() => Permissions2UsersAvgOrderByAggregateInput, {nullable:true})
    _avg?: Permissions2UsersAvgOrderByAggregateInput;

    @Field(() => Permissions2UsersMaxOrderByAggregateInput, {nullable:true})
    _max?: Permissions2UsersMaxOrderByAggregateInput;

    @Field(() => Permissions2UsersMinOrderByAggregateInput, {nullable:true})
    _min?: Permissions2UsersMinOrderByAggregateInput;

    @Field(() => Permissions2UsersSumOrderByAggregateInput, {nullable:true})
    _sum?: Permissions2UsersSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { Roles2UsersCountOrderByAggregateInput } from './roles-2-users-count-order-by-aggregate.input';
import { Roles2UsersAvgOrderByAggregateInput } from './roles-2-users-avg-order-by-aggregate.input';
import { Roles2UsersMaxOrderByAggregateInput } from './roles-2-users-max-order-by-aggregate.input';
import { Roles2UsersMinOrderByAggregateInput } from './roles-2-users-min-order-by-aggregate.input';
import { Roles2UsersSumOrderByAggregateInput } from './roles-2-users-sum-order-by-aggregate.input';

@InputType()
export class Roles2UsersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

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

    @Field(() => Roles2UsersCountOrderByAggregateInput, {nullable:true})
    _count?: Roles2UsersCountOrderByAggregateInput;

    @Field(() => Roles2UsersAvgOrderByAggregateInput, {nullable:true})
    _avg?: Roles2UsersAvgOrderByAggregateInput;

    @Field(() => Roles2UsersMaxOrderByAggregateInput, {nullable:true})
    _max?: Roles2UsersMaxOrderByAggregateInput;

    @Field(() => Roles2UsersMinOrderByAggregateInput, {nullable:true})
    _min?: Roles2UsersMinOrderByAggregateInput;

    @Field(() => Roles2UsersSumOrderByAggregateInput, {nullable:true})
    _sum?: Roles2UsersSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { Permissions2RolesCountOrderByAggregateInput } from './permissions-2-roles-count-order-by-aggregate.input';
import { Permissions2RolesAvgOrderByAggregateInput } from './permissions-2-roles-avg-order-by-aggregate.input';
import { Permissions2RolesMaxOrderByAggregateInput } from './permissions-2-roles-max-order-by-aggregate.input';
import { Permissions2RolesMinOrderByAggregateInput } from './permissions-2-roles-min-order-by-aggregate.input';
import { Permissions2RolesSumOrderByAggregateInput } from './permissions-2-roles-sum-order-by-aggregate.input';

@InputType()
export class Permissions2RolesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    createdBy?: keyof typeof SortOrder;

    @HideField()
    updatedBy?: keyof typeof SortOrder;

    @Field(() => Permissions2RolesCountOrderByAggregateInput, {nullable:true})
    _count?: Permissions2RolesCountOrderByAggregateInput;

    @Field(() => Permissions2RolesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Permissions2RolesAvgOrderByAggregateInput;

    @Field(() => Permissions2RolesMaxOrderByAggregateInput, {nullable:true})
    _max?: Permissions2RolesMaxOrderByAggregateInput;

    @Field(() => Permissions2RolesMinOrderByAggregateInput, {nullable:true})
    _min?: Permissions2RolesMinOrderByAggregateInput;

    @Field(() => Permissions2RolesSumOrderByAggregateInput, {nullable:true})
    _sum?: Permissions2RolesSumOrderByAggregateInput;
}

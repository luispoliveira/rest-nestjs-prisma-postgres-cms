import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { Roles2UsersOrderByRelationAggregateInput } from '../roles-2-users/roles-2-users-order-by-relation-aggregate.input';
import { Permissions2UsersOrderByRelationAggregateInput } from '../permissions-2-users/permissions-2-users-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @HideField()
    isActive?: keyof typeof SortOrder;

    @HideField()
    resetPasswordToken?: keyof typeof SortOrder;

    @HideField()
    resetPasswordExpires?: keyof typeof SortOrder;

    @HideField()
    roles?: Roles2UsersOrderByRelationAggregateInput;

    @HideField()
    permissions?: Permissions2UsersOrderByRelationAggregateInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    createdBy?: keyof typeof SortOrder;

    @HideField()
    updatedBy?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { Permissions2UsersOrderByRelationAggregateInput } from '../permissions-2-users/permissions-2-users-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';
import { Permissions2RolesOrderByRelationAggregateInput } from '../permissions-2-roles/permissions-2-roles-order-by-relation-aggregate.input';

@InputType()
export class PermissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    users?: Permissions2UsersOrderByRelationAggregateInput;

    @HideField()
    roles?: Permissions2RolesOrderByRelationAggregateInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    createdBy?: keyof typeof SortOrder;

    @HideField()
    updatedBy?: keyof typeof SortOrder;
}

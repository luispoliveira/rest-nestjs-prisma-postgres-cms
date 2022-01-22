import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { Roles2UsersOrderByRelationAggregateInput } from '../roles-2-users/roles-2-users-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';
import { Permissions2RolesOrderByRelationAggregateInput } from '../permissions-2-roles/permissions-2-roles-order-by-relation-aggregate.input';

@InputType()
export class RoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    users?: Roles2UsersOrderByRelationAggregateInput;

    @HideField()
    permissions?: Permissions2RolesOrderByRelationAggregateInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    createdBy?: keyof typeof SortOrder;

    @HideField()
    updatedBy?: keyof typeof SortOrder;
}

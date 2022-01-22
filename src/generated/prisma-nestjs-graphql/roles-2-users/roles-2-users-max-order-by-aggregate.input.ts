import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class Roles2UsersMaxOrderByAggregateInput {

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
}

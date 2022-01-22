import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOrderByWithRelationInput } from '../permission/permission-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class Permissions2RolesOrderByWithRelationInput {

    @Field(() => PermissionOrderByWithRelationInput, {nullable:true})
    permission?: PermissionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

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
}

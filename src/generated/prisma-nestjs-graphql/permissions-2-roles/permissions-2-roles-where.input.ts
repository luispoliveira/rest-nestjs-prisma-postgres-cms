import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class Permissions2RolesWhereInput {

    @Field(() => [Permissions2RolesWhereInput], {nullable:true})
    AND?: Array<Permissions2RolesWhereInput>;

    @Field(() => [Permissions2RolesWhereInput], {nullable:true})
    OR?: Array<Permissions2RolesWhereInput>;

    @Field(() => [Permissions2RolesWhereInput], {nullable:true})
    NOT?: Array<Permissions2RolesWhereInput>;

    @Field(() => PermissionRelationFilter, {nullable:true})
    permission?: PermissionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    createdBy?: StringNullableFilter;

    @HideField()
    updatedBy?: StringNullableFilter;
}

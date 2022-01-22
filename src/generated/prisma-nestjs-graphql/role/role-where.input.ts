import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Roles2UsersListRelationFilter } from '../roles-2-users/roles-2-users-list-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { Permissions2RolesListRelationFilter } from '../permissions-2-roles/permissions-2-roles-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class RoleWhereInput {

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    users?: Roles2UsersListRelationFilter;

    @HideField()
    permissions?: Permissions2RolesListRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    createdBy?: StringNullableFilter;

    @HideField()
    updatedBy?: StringNullableFilter;
}

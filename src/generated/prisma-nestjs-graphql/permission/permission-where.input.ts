import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Permissions2UsersListRelationFilter } from '../permissions-2-users/permissions-2-users-list-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { Permissions2RolesListRelationFilter } from '../permissions-2-roles/permissions-2-roles-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PermissionWhereInput {

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    users?: Permissions2UsersListRelationFilter;

    @HideField()
    roles?: Permissions2RolesListRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    createdBy?: StringNullableFilter;

    @HideField()
    updatedBy?: StringNullableFilter;
}

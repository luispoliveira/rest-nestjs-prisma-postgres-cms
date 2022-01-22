import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class Permissions2UsersWhereInput {

    @Field(() => [Permissions2UsersWhereInput], {nullable:true})
    AND?: Array<Permissions2UsersWhereInput>;

    @Field(() => [Permissions2UsersWhereInput], {nullable:true})
    OR?: Array<Permissions2UsersWhereInput>;

    @Field(() => [Permissions2UsersWhereInput], {nullable:true})
    NOT?: Array<Permissions2UsersWhereInput>;

    @Field(() => PermissionRelationFilter, {nullable:true})
    permission?: PermissionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    createdBy?: StringNullableFilter;

    @HideField()
    updatedBy?: StringNullableFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class Roles2UsersWhereInput {

    @Field(() => [Roles2UsersWhereInput], {nullable:true})
    AND?: Array<Roles2UsersWhereInput>;

    @Field(() => [Roles2UsersWhereInput], {nullable:true})
    OR?: Array<Roles2UsersWhereInput>;

    @Field(() => [Roles2UsersWhereInput], {nullable:true})
    NOT?: Array<Roles2UsersWhereInput>;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

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

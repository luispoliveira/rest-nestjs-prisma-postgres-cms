import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class Permissions2RolesScalarWhereWithAggregatesInput {

    @Field(() => [Permissions2RolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<Permissions2RolesScalarWhereWithAggregatesInput>;

    @Field(() => [Permissions2RolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<Permissions2RolesScalarWhereWithAggregatesInput>;

    @Field(() => [Permissions2RolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<Permissions2RolesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    permissionId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roleId?: IntWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @HideField()
    createdBy?: StringNullableWithAggregatesFilter;

    @HideField()
    updatedBy?: StringNullableWithAggregatesFilter;
}

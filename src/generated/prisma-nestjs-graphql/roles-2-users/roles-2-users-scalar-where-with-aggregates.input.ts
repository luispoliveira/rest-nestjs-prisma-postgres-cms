import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class Roles2UsersScalarWhereWithAggregatesInput {

    @Field(() => [Roles2UsersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<Roles2UsersScalarWhereWithAggregatesInput>;

    @Field(() => [Roles2UsersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<Roles2UsersScalarWhereWithAggregatesInput>;

    @Field(() => [Roles2UsersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<Roles2UsersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roleId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @HideField()
    createdBy?: StringNullableWithAggregatesFilter;

    @HideField()
    updatedBy?: StringNullableWithAggregatesFilter;
}

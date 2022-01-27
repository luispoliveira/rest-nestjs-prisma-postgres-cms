import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLogTypesFilter } from '../prisma/enum-log-types-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LogWhereInput {

    @Field(() => [LogWhereInput], {nullable:true})
    AND?: Array<LogWhereInput>;

    @Field(() => [LogWhereInput], {nullable:true})
    OR?: Array<LogWhereInput>;

    @Field(() => [LogWhereInput], {nullable:true})
    NOT?: Array<LogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    context?: StringFilter;

    @Field(() => EnumLogTypesFilter, {nullable:true})
    type?: EnumLogTypesFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    route?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    dto?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    params?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    query?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    body?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    error?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;
}

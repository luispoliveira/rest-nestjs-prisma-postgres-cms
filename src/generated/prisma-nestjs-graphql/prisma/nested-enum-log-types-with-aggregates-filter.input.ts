import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogTypes } from './log-types.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLogTypesFilter } from './nested-enum-log-types-filter.input';

@InputType()
export class NestedEnumLogTypesWithAggregatesFilter {

    @Field(() => LogTypes, {nullable:true})
    equals?: keyof typeof LogTypes;

    @Field(() => [LogTypes], {nullable:true})
    in?: Array<keyof typeof LogTypes>;

    @Field(() => [LogTypes], {nullable:true})
    notIn?: Array<keyof typeof LogTypes>;

    @Field(() => NestedEnumLogTypesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLogTypesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLogTypesFilter, {nullable:true})
    _min?: NestedEnumLogTypesFilter;

    @Field(() => NestedEnumLogTypesFilter, {nullable:true})
    _max?: NestedEnumLogTypesFilter;
}
